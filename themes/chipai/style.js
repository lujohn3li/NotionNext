export function Style() {
  return (
    <style jsx global>{`
      #theme-chipai {
        color-scheme: light dark;
        --bg: #fff;
        --soft: #f7f8fa;
        --text: #202d40;
        --sub: #596679;
        --border: #dde2e8;
        --blue: #155dcc;
        --tint: #edf4ff;
        --focus: #155dcc;
        --surface: #fff;
      }
      #theme-chipai * {
        box-sizing: border-box;
      }
      #theme-chipai {
        scroll-behavior: smooth;
        scroll-padding-top: 110px;
      }
      #theme-chipai {
        margin: 0;
        background: var(--bg);
        color: var(--text);
        font:
          16px/1.65 -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          'Noto Sans SC',
          sans-serif;
      }
      #theme-chipai button,
      #theme-chipai input,
      #theme-chipai a {
        -webkit-tap-highlight-color: transparent;
      }
      #theme-chipai button,
      #theme-chipai input {
        font: inherit;
      }
      #theme-chipai button,
      #theme-chipai a {
        touch-action: manipulation;
      }
      #theme-chipai a {
        color: inherit;
        text-decoration: none;
      }
      #theme-chipai button {
        cursor: pointer;
      }
      #theme-chipai button:focus-visible,
      #theme-chipai a:focus-visible,
      #theme-chipai input:focus-visible {
        outline: 3px solid var(--focus);
        outline-offset: 4px;
      }
      #theme-chipai button {
        color: inherit;
      }
      #theme-chipai svg {
        width: 20px;
        height: 20px;
        vertical-align: middle;
        fill: none;
        stroke: currentColor;
        stroke-width: 1.7;
      }
      #theme-chipai header {
        border-bottom: 1px solid var(--border);
        background: var(--bg);
      }
      #theme-chipai .wrap {
        max-width: 1120px;
        margin: auto;
        padding: 0 28px;
      }
      #theme-chipai .nav {
        min-height: 88px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
      }
      #theme-chipai .brand {
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 21px;
        font-weight: 750;
        letter-spacing: 0.01em;
        white-space: nowrap;
      }
      #theme-chipai .mark {
        display: grid;
        place-items: center;
        width: 40px;
        height: 40px;
        background: var(--blue);
        color: white;
        border-radius: 8px;
        font-size: 29px;
        line-height: 1;
        font-family: Georgia, serif;
      }
      #theme-chipai .word small {
        display: block;
        font-size: 11px;
        font-weight: 650;
        letter-spacing: 0.16em;
        line-height: 1.1;
        margin-top: 4px;
        color: var(--sub);
      }
      #theme-chipai nav {
        display: flex;
        align-items: center;
        gap: 24px;
      }
      #theme-chipai nav a,
      #theme-chipai nav button {
        font-size: 14px;
        background: none;
        border: 0;
        min-height: 44px;
        padding: 8px 0;
        color: var(--sub);
      }
      #theme-chipai nav .active {
        color: var(--blue);
        font-weight: 700;
      }
      #theme-chipai .nav-actions {
        display: flex;
        gap: 8px;
        align-items: center;
      }
      #theme-chipai .iconbtn {
        width: 44px;
        height: 44px;
        display: grid;
        place-items: center;
        background: none;
        border: 1px solid var(--border);
        border-radius: 8px;
      }
      #theme-chipai .preview {
        border-bottom: 1px solid var(--border);
        background: var(--soft);
        color: var(--sub);
        font-size: 12px;
        letter-spacing: 0.03em;
      }
      #theme-chipai .preview .wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: 34px;
        gap: 12px;
      }
      #theme-chipai .preview b {
        color: var(--blue);
        font-weight: 600;
      }
      #theme-chipai .hero {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 48px;
        align-items: center;
        padding-top: 56px;
        padding-bottom: 48px;
      }
      #theme-chipai .eyebrow {
        font-size: 12px;
        letter-spacing: 0.14em;
        font-weight: 700;
        color: var(--blue);
      }
      #theme-chipai h1 {
        font-size: 48px;
        line-height: 1.3;
        letter-spacing: -0.04em;
        margin: 18px 0 20px;
        font-weight: 750;
      }
      #theme-chipai h1 span {
        color: var(--blue);
      }
      #theme-chipai .lede {
        font-size: 16px;
        max-width: 440px;
        color: var(--sub);
        line-height: 1.9;
        margin: 0 0 28px;
      }
      #theme-chipai .hero-actions {
        display: flex;
        gap: 12px;
        align-items: center;
        flex-wrap: wrap;
      }
      #theme-chipai .btn {
        min-height: 46px;
        border-radius: 8px;
        padding: 10px 18px;
        border: 1px solid var(--border);
        background: var(--surface);
        font-size: 14px;
        font-weight: 650;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 14px;
      }
      #theme-chipai .primary {
        background: var(--blue);
        color: #fff;
        border-color: var(--blue);
      }
      #theme-chipai .imagebox {
        position: relative;
        margin: 0;
        border-radius: 12px;
        overflow: hidden;
        background: #e7e6df;
        aspect-ratio: 1.24;
      }
      #theme-chipai .imagebox img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      #theme-chipai .imglabel {
        position: absolute;
        left: 20px;
        bottom: 20px;
        border-radius: 8px;
        padding: 10px 14px;
        background: rgba(255, 255, 255, 0.94);
        color: #253248;
        font-size: 12px;
        line-height: 1.55;
      }
      #theme-chipai .imglabel b {
        font-size: 14px;
        display: block;
      }
      #theme-chipai .section-head {
        display: flex;
        align-items: end;
        justify-content: space-between;
        gap: 24px;
        padding-top: 20px;
      }
      #theme-chipai .section-head h2 {
        font-size: 24px;
        letter-spacing: -0.02em;
        margin: 0;
      }
      #theme-chipai .section-head p {
        margin: 4px 0 0;
        font-size: 14px;
        color: var(--sub);
      }
      #theme-chipai .edition {
        font-size: 12px;
        letter-spacing: 0.1em;
        color: var(--sub);
        padding-bottom: 4px;
      }
      #theme-chipai .discovery {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        margin-top: 24px;
        margin-bottom: 24px;
      }
      #theme-chipai .filters {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
      }
      #theme-chipai .filter {
        padding: 8px 14px;
        min-height: 44px;
        background: none;
        border: 1px solid var(--border);
        border-radius: 8px;
        font-size: 14px;
        white-space: nowrap;
      }
      #theme-chipai .filter[aria-pressed='true'] {
        color: var(--blue);
        border-color: var(--blue);
        background: var(--tint);
        font-weight: 650;
      }
      #theme-chipai .search {
        border: 1px solid var(--border);
        border-radius: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 0 12px;
        max-width: 230px;
        min-height: 44px;
        background: var(--surface);
      }
      #theme-chipai .search svg {
        color: var(--sub);
        flex-shrink: 0;
      }
      #theme-chipai .search input {
        width: 100%;
        min-width: 0;
        border: 0;
        outline: none;
        background: none;
        color: var(--text);
        font-size: 14px;
        height: 42px;
      }
      #theme-chipai .search:focus-within {
        outline: 2px solid var(--focus);
        outline-offset: 2px;
      }
      #theme-chipai .search input:focus-visible {
        outline: none;
      }
      #theme-chipai input::placeholder {
        color: var(--sub);
      }
      #theme-chipai .grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px;
      }
      #theme-chipai .card {
        position: relative;
        min-width: 0;
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 24px;
        text-align: left;
        background: var(--surface);
        display: flex;
        flex-direction: column;
        min-height: 265px;
        transition:
          border-color 0.2s,
          transform 0.2s;
      }
      #theme-chipai .card:hover {
        border-color: var(--blue);
        transform: translateY(-3px);
      }
      #theme-chipai .card .meta {
        font-size: 12px;
        color: var(--blue);
        font-weight: 650;
        letter-spacing: 0.03em;
      }
      #theme-chipai .card h3 {
        font-size: 19px;
        line-height: 1.55;
        letter-spacing: -0.02em;
        margin: 16px 0 12px;
      }
      #theme-chipai .card p {
        font-size: 14px;
        line-height: 1.8;
        color: var(--sub);
        margin: 0 0 20px;
      }
      #theme-chipai .card .bottom {
        border-top: 1px solid var(--border);
        margin-top: auto;
        padding-top: 14px;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        font-size: 12px;
        color: var(--sub);
      }
      #theme-chipai .card .arrow {
        font-size: 18px;
        line-height: 1.1;
        color: var(--blue);
      }
      #theme-chipai .empty {
        padding: 48px 20px;
        border: 1px dashed var(--border);
        text-align: center;
        border-radius: 12px;
        color: var(--sub);
      }
      #theme-chipai .empty strong {
        display: block;
        font-size: 20px;
        color: var(--text);
        margin-bottom: 8px;
      }
      #theme-chipai .empty button {
        margin-top: 16px;
      }
      #theme-chipai .count {
        font-size: 12px;
        color: var(--sub);
        margin: 14px 0 0;
        min-height: 20px;
      }
      #theme-chipai .quote {
        margin: 44px 0 56px;
        background: var(--soft);
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 32px;
        display: grid;
        grid-template-columns: 1fr auto;
        gap: 32px;
        align-items: center;
      }
      #theme-chipai .quote h2 {
        font-size: 24px;
        margin: 8px 0;
      }
      #theme-chipai .quote p {
        font-size: 14px;
        color: var(--sub);
        margin: 0;
        max-width: 650px;
      }
      #theme-chipai .quote .eyebrow {
        font-size: 11px;
      }
      #theme-chipai footer {
        border-top: 1px solid var(--border);
        padding: 28px 0;
        color: var(--sub);
        font-size: 12px;
      }
      #theme-chipai footer .wrap {
        display: flex;
        justify-content: space-between;
        gap: 24px;
      }
      #theme-chipai footer a {
        display: inline-flex;
        align-items: center;
        min-height: 44px;
        text-decoration: underline;
        text-underline-offset: 4px;
      }
      #theme-chipai dialog {
        border: 1px solid var(--border);
        border-radius: 12px;
        padding: 0;
        background: var(--surface);
        color: var(--text);
        width: min(680px, calc(100% - 32px));
        max-height: 85vh;
        overflow: auto;
      }
      #theme-chipai dialog::backdrop {
        background: rgba(14, 24, 40, 0.55);
      }
      #theme-chipai .dialog-head {
        position: sticky;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: var(--surface);
        padding: 16px 24px;
        border-bottom: 1px solid var(--border);
        gap: 20px;
        z-index: 1;
      }
      #theme-chipai .dialog-head span {
        font-size: 12px;
        color: var(--blue);
        font-weight: 650;
      }
      #theme-chipai .dialog-body {
        padding: 28px 32px 32px;
      }
      #theme-chipai .dialog-body h2 {
        font-size: 28px;
        line-height: 1.5;
        margin: 0 0 24px;
      }
      #theme-chipai .dialog-body p {
        font-size: 16px;
        line-height: 1.9;
        color: var(--sub);
        margin: 0 0 18px;
      }
      #theme-chipai .note {
        background: var(--soft);
        border-radius: 8px;
        padding: 16px;
        font-size: 12px !important;
        margin-top: 28px !important;
      }
      #theme-chipai .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      #theme-chipai [hidden] {
        display: none !important;
      }
      .dark #theme-chipai {
        --bg: #151b24;
        --soft: #1c2532;
        --text: #f0f3f9;
        --sub: #b1bdcd;
        --border: #43516a;
        --blue: #90bbff;
        --tint: #23334d;
        --focus: #90bbff;
        --surface: #19222e;
      }
      .dark #theme-chipai .primary,
      .dark #theme-chipai .mark {
        color: #142139;
      }
      @media (max-width: 900px) {
        #theme-chipai .nav {
          gap: 16px;
        }
        #theme-chipai nav {
          gap: 16px;
        }
        #theme-chipai .hero {
          gap: 28px;
        }
        #theme-chipai h1 {
          font-size: 39px;
        }
        #theme-chipai .grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        #theme-chipai .discovery {
          flex-direction: column;
          align-items: stretch;
        }
        #theme-chipai .search {
          max-width: 100%;
        }
        #theme-chipai .hero-actions .btn {
          padding: 10px 14px;
        }
        #theme-chipai .edition {
          display: none;
        }
      }
      @media (max-width: 600px) {
        #theme-chipai .wrap {
          padding: 0 20px;
        }
        #theme-chipai .nav {
          flex-wrap: wrap;
          padding-top: 16px;
          padding-bottom: 10px;
          gap: 8px 16px;
        }
        #theme-chipai .brand {
          font-size: 19px;
        }
        #theme-chipai .nav-actions {
          margin-left: auto;
        }
        #theme-chipai nav {
          order: 3;
          width: 100%;
          justify-content: space-between;
          gap: 12px;
        }
        #theme-chipai nav a,
        #theme-chipai nav button {
          font-size: 14px;
        }
        #theme-chipai .preview .wrap {
          font-size: 11px;
          min-height: 36px;
        }
        #theme-chipai .hero {
          grid-template-columns: 1fr;
          padding-top: 32px;
          padding-bottom: 32px;
          gap: 28px;
        }
        #theme-chipai h1 {
          font-size: 38px;
          margin: 12px 0 16px;
        }
        #theme-chipai .lede {
          font-size: 16px;
          margin-bottom: 24px;
        }
        #theme-chipai .hero-actions {
          gap: 10px;
        }
        #theme-chipai .imagebox {
          aspect-ratio: 1.65;
        }
        #theme-chipai .imglabel {
          left: 14px;
          bottom: 14px;
          padding: 8px 12px;
        }
        #theme-chipai .imglabel b {
          font-size: 13px;
        }
        #theme-chipai .imglabel {
          font-size: 11px;
        }
        #theme-chipai .section-head {
          padding-top: 8px;
        }
        #theme-chipai .section-head h2 {
          font-size: 23px;
        }
        #theme-chipai .discovery {
          margin-top: 20px;
          gap: 16px;
        }
        #theme-chipai .filters {
          gap: 8px;
        }
        #theme-chipai .filter {
          padding: 8px 11px;
        }
        #theme-chipai .grid {
          grid-template-columns: 1fr;
          gap: 16px;
        }
        #theme-chipai .card {
          min-height: 235px;
          padding: 24px;
        }
        #theme-chipai .card h3 {
          font-size: 20px;
        }
        #theme-chipai .quote {
          grid-template-columns: 1fr;
          padding: 24px;
          gap: 20px;
          margin: 32px 0;
        }
        #theme-chipai .quote h2 {
          font-size: 22px;
        }
        #theme-chipai .quote .btn {
          justify-self: start;
        }
        #theme-chipai .dialog-body {
          padding: 24px;
        }
        #theme-chipai .dialog-body h2 {
          font-size: 24px;
        }
        #theme-chipai footer .wrap {
          flex-direction: column;
          gap: 12px;
        }
        #theme-chipai .preview-secondary {
          display: none;
        }
      }
      @media (prefers-reduced-motion: reduce) {
        #theme-chipai {
          scroll-behavior: auto;
        }
        #theme-chipai *,
        #theme-chipai *:before,
        #theme-chipai *:after {
          transition: none !important;
        }
      }
      #theme-chipai .word small,
      #theme-chipai .preview,
      #theme-chipai .eyebrow,
      #theme-chipai .edition,
      #theme-chipai .card .meta,
      #theme-chipai .card .bottom,
      #theme-chipai .count,
      #theme-chipai .quote .eyebrow,
      #theme-chipai footer,
      #theme-chipai .dialog-head span,
      #theme-chipai .imglabel,
      #theme-chipai .preview .wrap,
      #theme-chipai .imglabel b {
        font-size: 14px;
      }
      #theme-chipai .note {
        font-size: 14px !important;
      }
      #theme-chipai .filter,
      #theme-chipai .search,
      #theme-chipai .iconbtn,
      #theme-chipai .btn:not(.primary) {
        border-color: #8895a8;
      }
      .dark #theme-chipai .filter,
      .dark #theme-chipai .search,
      .dark #theme-chipai .iconbtn,
      .dark #theme-chipai .btn:not(.primary) {
        border-color: #748198;
      }
      #theme-chipai {
        min-height: 100vh;
      }
      #theme-chipai .card {
        text-decoration: none;
        color: var(--text);
      }
      #theme-chipai .page-body {
        max-width: 1120px;
        margin: 0 auto;
        padding: 40px 28px 64px;
        min-height: 55vh;
      }
      #theme-chipai .pagination {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        margin: 24px 0;
      }
      #theme-chipai .skip {
        position: absolute;
        left: 16px;
        top: -100px;
        padding: 12px;
        background: var(--bg);
        z-index: 100;
      }
      #theme-chipai .skip:focus {
        top: 8px;
      }
      #theme-chipai .article-info {
        width: 100%;
      }
      #theme-chipai .notion {
        color: var(--text);
      }
      .dark #theme-chipai .filter,
      .dark #theme-chipai .search,
      .dark #theme-chipai .iconbtn,
      .dark #theme-chipai .btn:not(.primary) {
        border-color: #748198;
      }
    `}</style>
  )
}
