import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMemo, useRef, useState } from 'react'
import { useGlobal } from '@/lib/global'
import { siteConfig } from '@/lib/config'
import {
  LayoutSlug,
  LayoutArchive,
  LayoutCategoryIndex,
  LayoutTagIndex,
  Layout404,
  THEME_CONFIG
} from '../simple'
import { Style } from './style'

const TOPICS = ['芯片架构', 'AI 计算', '产业观察', '工程与思考']
const Arrow = () => <span aria-hidden='true'>↗</span>
const SearchIcon = () => (
  <svg viewBox='0 0 24 24' aria-hidden='true'>
    <circle cx='10.5' cy='10.5' r='6.5' />
    <path d='m16 16 5 5' />
  </svg>
)

/** The existing Notion data pipeline supplies real hrefs, summaries and categories. */
function LayoutBase({ children }) {
  const { isDarkMode, toggleDarkMode } = useGlobal()
  const router = useRouter()
  const home = router.pathname === '/'
  return (
    <div id='theme-chipai'>
      <Style />
      <a className='skip' href='#main-content'>
        跳到正文
      </a>
      <header>
        <div className='wrap nav'>
          <Link className='brand' href='/' aria-label='吃π俱乐部首页'>
            <span className='mark' aria-hidden='true'>
              π
            </span>
            <span className='word'>
              吃π俱乐部<small>CHIP & AI CLUB</small>
            </span>
          </Link>
          <nav aria-label='主导航'>
            <Link
              href='/'
              className={home ? 'active' : ''}
              aria-current={home ? 'page' : undefined}
            >
              首页
            </Link>
            <Link href='/category'>文章与专题</Link>
            <Link href='/about-club'>关于俱乐部</Link>
            <Link href='/search'>搜索</Link>
          </nav>
          <div className='nav-actions'>
            <button
              className='iconbtn'
              onClick={toggleDarkMode}
              aria-label={isDarkMode ? '切换浅色模式' : '切换深色模式'}
            >
              <svg viewBox='0 0 24 24' aria-hidden='true'>
                <path d='M20.3 15.2A8.5 8.5 0 0 1 8.8 3.7a8.5 8.5 0 1 0 11.5 11.5Z' />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <main id='main-content' className={home ? '' : 'page-body'}>
        {children}
      </main>
      <footer>
        <div className='wrap'>
          <div>
            <strong>吃π俱乐部</strong> · 芯片 / AI / 工程实践
            <br />
            把技术读懂，把思考留下。
          </div>
          <div>
            <Link href='/archive'>历史归档</Link> ·{' '}
            <Link href='/rss/feed.xml'>RSS</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ReadingList({
  posts = [],
  postCount = 0,
  page = 1,
  keyword = '',
  category,
  tag,
  hero = false,
  NOTION_CONFIG
}) {
  const [topic, setTopic] = useState('全部')
  const [query, setQuery] = useState(keyword || '')
  const input = useRef(null)
  const router = useRouter()
  const availableTopics = useMemo(
    () =>
      Array.from(
        new Set([...TOPICS, ...posts.map(p => p.category).filter(Boolean)])
      ),
    [posts]
  )
  const matches = useMemo(() => {
    const term = query.trim().toLocaleLowerCase()
    return posts.filter(
      p =>
        (topic === '全部' || p.category === topic) &&
        [p.title, p.summary, p.category, ...(p.tags || [])]
          .join(' ')
          .toLocaleLowerCase()
          .includes(term)
    )
  }, [posts, topic, query])
  const gpu = posts.find(p => p.title?.includes('Tensor Core'))
  const writing = posts.find(p => p.title?.includes('关于写作'))
  const pageSize = Number(siteConfig('POSTS_PER_PAGE', 12, NOTION_CONFIG)) || 12
  const pageNumber = Number(page) || 1
  const totalPages = Math.ceil(postCount / pageSize)
  const prefix = router.asPath
    .split('?')[0]
    .replace(/\/page\/\d+\/?$/, '')
    .replace(/\/$/, '')
  const pageHref = n => ({
    pathname: n === 1 ? prefix || '/' : `${prefix}/page/${n}`,
    query: keyword ? { s: keyword } : {}
  })
  return (
    <>
      {hero && (
        <section className='wrap hero' aria-labelledby='hero-title'>
          <div>
            <div className='eyebrow'>CHIP × AI × PRACTICE</div>
            <h1 id='hero-title'>
              从一颗芯片，
              <br />
              读懂<span>智能世界。</span>
            </h1>
            <p className='lede'>
              拆解芯片架构，理解 AI 计算，观察产业变化。
              <br />
              在这里，把技术读懂，把思考留下。
            </p>
            <div className='hero-actions'>
              <a className='btn primary' href='#explore'>
                探索文章 <Arrow />
              </a>
              {gpu?.href && (
                <Link className='btn' href={gpu.href}>
                  从 GPU 开始 <span aria-hidden='true'>→</span>
                </Link>
              )}
            </div>
          </div>
          <figure className='imagebox'>
            <img
              src='/images/chipai-hero.svg'
              width='1312'
              height='816'
              fetchPriority='high'
              alt='硅芯片与金属互连细节的微距概念图'
            />
            <figcaption className='imglabel'>
              <b>看见算力背后的细节</b>芯片主题概念图 · AI 生成
            </figcaption>
          </figure>
        </section>
      )}
      <section
        className={hero ? 'wrap' : ''}
        id='explore'
        aria-labelledby='articles-title'
      >
        <div className='section-head'>
          <div>
            <h2 id='articles-title'>
              {category || tag || (keyword ? '搜索结果' : '值得读，也值得想。')}
            </h2>
            <p>从架构原理到产业观察，找到你的下一篇阅读。</p>
          </div>
          <Link className='edition' href='/category'>
            全站分类 ↗
          </Link>
        </div>
        <div className='discovery'>
          <div className='filters' role='group' aria-label='按专题筛选当前页'>
            {['全部', ...availableTopics].map(t => (
              <button
                key={t}
                className='filter'
                aria-pressed={topic === t}
                onClick={() => setTopic(t)}
              >
                {t === '全部' ? '全部文章' : t}
              </button>
            ))}
          </div>
          <label className='search'>
            <SearchIcon />
            <span className='sr-only'>筛选当前页文章</span>
            <input
              ref={input}
              type='search'
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder='筛选当前页文章'
            />
          </label>
        </div>
        <div className='grid'>
          {matches.map(post => {
            const content = (
              <>
                <span className='meta'>{post.category || '阅读笔记'}</span>
                <h3>{post.title}</h3>
                <p>{post.summary || '打开文章，阅读完整内容。'}</p>
                <span className='bottom'>
                  <span>阅读全文</span>
                  <Arrow />
                </span>
              </>
            )
            return post.href ? (
              <Link className='card' key={post.href} href={post.href}>
                {content}
              </Link>
            ) : (
              <article className='card' key={post.id || post.title}>
                {content}
              </article>
            )
          })}
        </div>
        {matches.length === 0 && (
          <div className='empty'>
            <strong>还没有找到这篇文章</strong>
            <p>换个关键词，或试试其他专题。</p>
            <button
              className='btn'
              onClick={() => {
                setQuery('')
                setTopic('全部')
                input.current?.focus()
              }}
            >
              清除筛选
            </button>
          </div>
        )}
        <p className='count' aria-live='polite'>
          {matches.length} 篇文章{totalPages > 1 ? ' · 当前页筛选' : ''}
        </p>
        {totalPages > 1 && (
          <nav className='pagination' aria-label='文章分页'>
            {pageNumber > 1 ? (
              <Link className='btn' href={pageHref(pageNumber - 1)}>
                上一页
              </Link>
            ) : (
              <span />
            )}
            <span>
              {pageNumber} / {totalPages}
            </span>
            {pageNumber < totalPages && (
              <Link className='btn' href={pageHref(pageNumber + 1)}>
                下一页
              </Link>
            )}
          </nav>
        )}
        {hero && (
          <aside className='quote'>
            <div>
              <div className='eyebrow'>BEYOND THE CHIP</div>
              <h2>技术向前，思考向深。</h2>
              <p>
                不只收藏信息，也练习表达。关于写作、协作与知识沉淀，留下一些可以反复使用的方法。
              </p>
            </div>
            <Link
              className='btn'
              href={writing?.href || '/category/工程与思考'}
            >
              读一篇思考 <span aria-hidden='true'>→</span>
            </Link>
          </aside>
        )}
      </section>
    </>
  )
}

const LayoutIndex = props => <ReadingList {...props} hero />
const LayoutPostList = props => (
  <ReadingList
    key={`${props.category || ''}:${props.tag || ''}:${props.page || 1}`}
    {...props}
  />
)
const LayoutSearch = props => (
  <ReadingList key={props.keyword || ''} {...props} />
)
export {
  LayoutBase,
  LayoutIndex,
  LayoutPostList,
  LayoutSearch,
  LayoutSlug,
  LayoutArchive,
  LayoutCategoryIndex,
  LayoutTagIndex,
  Layout404,
  THEME_CONFIG
}
