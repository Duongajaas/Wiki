![](https://img.shields.io/badge/version-2.7.0-orange) ![](https://img.shields.io/badge/theme-hope-green) ![](https://img.shields.io/badge/powered%20by-vuepress-lightgrey?style=flat-square&logo=vue.js) ![](https://img.shields.io/badge/deploy-github%20pages-lightgrey?style=flat-square&logo=github) ![](https://img.shields.io/github/last-commit/duongajaas/Wiki?display_timestamp=committer)

# Duongajaas Wiki / Blog

Đây là source cho trang Wiki cá nhân của **Le Quoc Duong**. Trang được dùng để ghi chú kiến thức, lưu tài liệu học tập, tổng hợp kinh nghiệm làm project và chia sẻ các bài viết kỹ thuật.

Trang web: https://duongajaas.github.io/Wiki/

## Nội dung chính

- Lập trình: JavaScript, TypeScript, ghi chú backend và các ghi chú phát triển phần mềm.
- Mạng máy tính: routing, switching, VLAN, NAT, VPN/IPSec và các giao thức nền tảng.
- Thuật toán & DSA: thuật toán, cấu trúc dữ liệu và ghi chú luyện tập.
- Cơ sở dữ liệu: SQL, MySQL, MongoDB.
- Hệ điều hành: process, thread, memory, filesystem, IPC, scheduling.
- Dự án: tài liệu cho các project như BachHoa và NT131 Smart Parking.

## Công nghệ

- VuePress 2.x
- vuepress-theme-hope
- Vue 3 + TypeScript
- Markdown / Obsidian
- GitHub Pages / GitHub Actions

## Cấu trúc thư mục

```text
.
├── src/                    # Nội dung chính của website
│   ├── .vuepress/          # Config, theme, navbar, sidebar, plugins
│   ├── programming/        # Ghi chú lập trình
│   ├── network/            # Ghi chú networking
│   ├── algorithms/         # Ghi chú thuật toán
│   ├── database/           # Ghi chú database
│   ├── os/                 # Ghi chú operating systems
│   └── project/            # Tài liệu project
├── intro.md                # Bản ghi chú giới thiệu ở root
├── about.md                # Bản ghi chú about ở root
├── package.json            # Scripts và dependencies
└── README.md
```

## Chạy local

Yêu cầu: Node.js và pnpm.

```bash
pnpm install
pnpm run dev
```

Dev server mặc định chạy theo cấu hình VuePress trong `src/.vuepress/config.ts`.

## Build production

```bash
pnpm run build
```

Static files sau khi build nằm trong:

```text
src/.vuepress/dist
```

## Scripts

```bash
pnpm run dev         # Chạy VuePress dev server
pnpm run clean-dev   # Chạy dev server và xóa cache
pnpm run build       # Build static site cho production
pnpm run update-package
```

## Triển khai

Site được cấu hình với `base: "/Wiki/"` để deploy lên GitHub Pages tại:

https://duongajaas.github.io/Wiki/

Workflow deploy nằm trong `.github/workflows/`.
