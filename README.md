This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





#DOKUMENTASI PROJECT

# Project Structure

## Assets (Images)

Seluruh aset gambar disimpan di dalam direktori:

public/image/

Folder ini dibagi berdasarkan kebutuhan masing-masing section untuk menjaga kerapihan dan memudahkan pengelolaan:

* `video/` → digunakan untuk section video
* `rsvp/` → digunakan untuk section RSVP
* `hero/` → digunakan untuk tampilan hero
* `gift/` → berisi aset tambahan seperti efek asap, gift, dan elemen dekoratif lainnya
* `footer/` → digunakan untuk logo atau elemen pada footer
* `mentahan/` → berisi aset gambar mentah (seperti wajah, dan lainnya)

Struktur ini bertujuan agar setiap aset tersusun dengan jelas dan mudah digunakan kembali.


## Components Structure

Seluruh komponen disimpan di dalam direktori:

app/components/

Dengan pembagian berdasarkan fungsi sebagai berikut:

* `card/` → komponen berbentuk card
* `data/` → data statis atau dummy yang digunakan dalam aplikasi
* `layout/` → komponen layout utama
* `popup/` → komponen popup atau modal
* `sections/` → komponen berdasarkan section (hero, RSVP, video, dll)

Pendekatan ini digunakan untuk menjaga modularitas serta memudahkan pengembangan dan pemeliharaan kode.


## Page Rendering

Seluruh komponen dan section dirender melalui file utama:

app/page.tsx



