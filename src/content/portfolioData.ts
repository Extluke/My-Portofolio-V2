import { Language } from '../types';

export function getProjects(lang: Language) {
  const isEn = lang === 'en';

  return [
    {
      id: 'modellyng',
      categoryType: 'ai' as const,
      categoryLabel: 'AI & DISTRIBUTED PIPELINE',
      badge: isEn ? '★ Student Incubation' : '★ Inkubasi Mahasiswa',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      period: isEn ? '2026 – Present' : '2026 – Sekarang',
      role: isEn ? 'Role: CTO & Co-Developer' : 'Peran: CTO & Co-Developer',
      title: isEn
        ? 'Modellyng — AI-Powered Scientific Paper Extraction for Students'
        : 'Modellyng — Ekstraksi Paper Ilmiah Berbasis AI untuk Mahasiswa',
      problem: isEn
        ? 'Students write literature reviews by manually reading dozens of papers, struggling to contrast methods, datasets, and research gaps across studies.'
        : 'Mahasiswa menyusun tinjauan pustaka dengan membaca puluhan paper secara manual, dan sulit membandingkan metode, data, serta celah penelitian antar paper.',
      keyOutcome: isEn
        ? '10-stage asynchronous pipeline with per-page citation verification & Gemini-Groq multi-model failover'
        : 'Pipeline asinkron 10 tahap dengan verifikasi kutipan per halaman & failover multi-model Gemini-Groq',
      toolsSummary: ['FastAPI', 'Celery', 'Redis', 'pgvector', 'Gemini'],
      toolsSummaryExtra: '+2 more',
      statusTag: isEn ? 'In Active Development · Incubation' : 'Dalam Pengembangan · Program Inkubasi',
      bannerBrand: 'Modellyng',
      bannerSub: 'Async 10-Stage Pipeline · Gemini & Groq',
      thumbnailImage: '/projects/modellyng/Thumbnail.png',
      screenshots: [
        {
          url: '/projects/modellyng/Screnshot1.png',
          caption: isEn
            ? '01. 10-Stage Asynchronous Pipeline & PDF Coordinate Extraction'
            : '01. Pipeline Asinkron 10 Tahap & Ekstraksi Koordinat PDF',
        },
        {
          url: '/projects/modellyng/Screnshot2.png',
          caption: isEn
            ? '02. Dual-Provider LLM (Gemini & Groq) with Rate Limiting'
            : '02. Dual-Provider LLM (Gemini & Groq) dengan Rate Limiting',
        },
        {
          url: '/projects/modellyng/Screnshot3.png',
          caption: isEn
            ? '03. Hybrid Search (pgvector HNSW + BM25 via RRF)'
            : '03. Hybrid Search (pgvector HNSW + BM25 via RRF)',
        },
        {
          url: '/projects/modellyng/Screnshot4.png',
          caption: isEn
            ? '04. Citation Verification & Interactive Literature Review'
            : '04. Verifikasi Kutipan & Tinjauan Pustaka Interaktif',
        },
      ],
      githubUrl: undefined,
      isPrivate: true,
      modalDetails: {
        title: isEn
          ? 'Modellyng: AI-Powered Scientific Paper Extraction for Students'
          : 'Modellyng: Ekstraksi Paper Ilmiah Berbasis AI untuk Mahasiswa',
        category: isEn ? 'AI & Distributed Backend Pipeline' : 'AI & Distributed Backend Pipeline',
        period: isEn ? '2026 – Present' : '2026 – Sekarang',
        summary: isEn
          ? 'AI-powered scientific paper extraction platform to help students automatically compare methodologies, datasets, and research gaps. Built with a teammate where I served as CTO and backend architect.'
          : 'Platform ekstraksi paper ilmiah berbasis AI untuk membantu mahasiswa membandingkan metode, data, dan celah penelitian secara otomatis. Dibangun bersama satu rekan tim di mana saya memegang peran CTO dan arsitek backend.',
        keyOutcome: isEn
          ? '10-stage asynchronous pipeline with per-page citation verification & Gemini-Groq multi-model failover'
          : 'Pipeline asinkron 10 tahap dengan verifikasi kutipan per halaman & failover multi-model Gemini-Groq',
        tools: ['Python', 'FastAPI', 'Celery', 'Redis', 'PostgreSQL + pgvector', 'React + TypeScript', 'Gemini API', 'Docker'],
        deliverables: isEn
          ? [
              '10-stage asynchronous pipeline (FastAPI, Celery, Redis): PDF validation, bounding box text extraction, quality checks, document classification, 13-parameter scientific extraction, and verification.',
              'Every extracted insight requires citations and page numbers mapped to original PDF text, renderable with interactive in-viewer highlighting.',
              'Dual model providers (Gemini primary, Groq fallback) with rate-limiting and retry logic. If the primary model runs out of quota mid-run, the stage restarts with the fallback provider.',
              'Atomic daily quotas in PostgreSQL with ledger audit logging and automated quota refunds whenever an extraction fails.',
              'Hybrid search (pgvector HNSW vector indexing and BM25 full-text, merged via Reciprocal Rank Fusion) powering project-level AI Q&A.',
              'Currently under active development within the Student Incubation Program.',
            ]
          : [
              'Pipeline asinkron 10 tahap (FastAPI, Celery, Redis): validasi PDF, ekstraksi teks beserta koordinat, pemeriksaan kualitas, klasifikasi jenis dokumen, ekstraksi 13 parameter ilmiah, lalu verifikasi.',
              'Setiap hasil ekstraksi wajib memuat kutipan dan nomor halaman yang dicocokkan ke teks PDF, serta bisa disorot langsung di penampil PDF.',
              'Dua penyedia model (Gemini utama, Groq cadangan) dengan pembatasan laju dan retry. Bila model utama kehabisan kuota di tengah proses, tahap diulang dari awal dengan model cadangan.',
              'Kuota harian atomik di PostgreSQL dengan buku besar penggunaan dan pengembalian kuota otomatis saat ekstraksi gagal.',
              'Pencarian hibrida (pgvector HNSW dan BM25 full-text, digabung dengan RRF) untuk fitur tanya AI per proyek.',
              'Status saat ini dalam pengembangan aktif pada Program Inkubasi Mahasiswa.',
            ],
      },
    },
    {
      id: 'el-ayam',
      categoryType: 'ai' as const,
      categoryLabel: 'AI, COMPUTER VISION & IOT',
      badge: isEn ? '★ Live Farm Deployed' : '★ Kandang Nyata',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      period: '2025 – 2026',
      role: 'Smart Farm IoT & Computer Vision System',
      title: isEn
        ? 'El Ayam — Poultry Farm Monitoring & Early Disease Detection'
        : 'El Ayam — Pemantauan Kandang & Deteksi Dini Penyakit Ayam',
      problem: isEn
        ? 'Farmers require 24/7 poultry house surveillance, as respiratory diseases (CRD) are difficult to detect without close manual inspection.'
        : 'Peternak butuh pengawasan kandang 24 jam, dan penyakit pernapasan (CRD) sulit terdeteksi tanpa inspeksi fisik langsung.',
      keyOutcome: isEn
        ? 'Deployed in live operational poultry farms using dual chained YOLOv8 models and ESP32 telemetry'
        : 'Dipakai langsung di kandang peternakan nyata dengan dual YOLOv8 dan telemetri ESP32',
      toolsSummary: ['Python', 'Flask', 'SQLite', 'YOLOv8', 'OpenCV'],
      toolsSummaryExtra: '+1 more',
      statusTag: isEn ? 'Live Farm Deployed' : 'Dipakai di Kandang Nyata',
      bannerBrand: 'El Ayam',
      bannerSub: 'Dual YOLOv8 Computer Vision Pipeline',
      thumbnailImage: '/projects/el-ayam/Thumbnail.png',
      screenshots: [
        {
          url: '/projects/el-ayam/Screnshot1.png',
          caption: isEn
            ? '01. Dual YOLOv8 Pipeline: Head Detection & CRD Classification'
            : '01. Dual YOLOv8 Pipeline: Deteksi Kepala & Klasifikasi CRD',
        },
        {
          url: '/projects/el-ayam/Screnshot2.png',
          caption: isEn
            ? '02. Real-Time Coop Monitoring Dashboard & Alerts'
            : '02. Dashboard Monitoring Kandang Real-Time & Notifikasi',
        },
        {
          url: '/projects/el-ayam/Screnshot3.png',
          caption: isEn
            ? '03. Live On-Site Testing in Working Poultry Farm'
            : '03. Pengujian Langsung di Lapangan Kandang Ayam',
        },
      ],
      githubUrl: 'https://github.com/Extluke/SmartFarm-El_Ayam',
      isPrivate: false,
      modalDetails: {
        title: isEn
          ? 'El Ayam: Poultry Farm Monitoring & Early Disease Detection'
          : 'El Ayam: Pemantauan Kandang & Deteksi Dini Penyakit Ayam',
        category: 'AI, Computer Vision & IoT',
        period: '2025 – 2026',
        summary: isEn
          ? 'Poultry farmers require 24/7 coop surveillance, and respiratory diseases (CRD) are hard to diagnose without physical checks. This system merges dual-model vision with ESP32 microcontroller telemetry.'
          : 'Peternak butuh pengawasan kandang 24 jam, dan penyakit pernapasan (CRD) sulit terdeteksi tanpa inspeksi fisik langsung. Sistem ini menggabungkan dual-model vision dengan telemetri sensor mikrokontroler ESP32.',
        keyOutcome: isEn
          ? 'Deployed in live operational poultry farms using dual chained YOLOv8 models and ESP32 telemetry'
          : 'Dipakai langsung di kandang peternakan nyata dengan dual YOLOv8 dan telemetri ESP32',
        tools: ['Python', 'Flask', 'SQLite', 'YOLOv8', 'OpenCV', 'ESP32'],
        deliverables: isEn
          ? [
              'Two chained YOLOv8 models: the first detects chicken heads, and the second classifies healthy vs. CRD symptom states.',
              'Hazard alerts trigger only after 5 consecutive positive frames to eliminate false positive warnings.',
              'ESP32 firmware transmits temperature, humidity, ammonia, and dust metrics every 60s; flagged offline after 65s of inactivity.',
              'Automated historical data archiving to CSV and expired log purging to keep databases lightweight and responsive.',
            ]
          : [
              'Dua model YOLOv8 berantai: model pertama mendeteksi kepala ayam, model kedua mengklasifikasi sehat atau CRD.',
              'Status bahaya baru dikirim setelah terdeteksi 5 frame berturut-turut untuk menekan alarm palsu (false positives).',
              'Firmware ESP32 mengirim data suhu, kelembapan, amonia, dan debu tiap 60 detik; perangkat ditandai offline bila diam lebih dari 65 detik.',
              'Pengarsipan otomatis data lama ke CSV dan penyapuan log kedaluwarsa agar database tetap ringan dan responsif.',
            ],
      },
    },
    {
      id: 'smartfarm-iot',
      categoryType: 'ai' as const,
      categoryLabel: 'IOT & EMBEDDED SYSTEM',
      badge: undefined,
      badgeColor: undefined,
      period: '2025 – 2026',
      role: 'SmartFarm Edge Hardware & Microcontroller Layer',
      title: isEn
        ? 'SmartFarm IoT Telemetry — ESP32 Environmental Sensors'
        : 'SmartFarm IoT Telemetry — Sensor Lingkungan Kandang ESP32',
      problem: isEn
        ? 'ESP32 microcontroller firmware reads temperature, humidity, ammonia gas, and dust every 60 seconds with automatic offline failover handling.'
        : 'Firmware mikrokontroler ESP32 membaca data suhu, kelembapan, gas amonia, dan debu tiap 60 detik dengan penanganan failover offline otomatis.',
      keyOutcome: isEn
        ? '65-second offline watchdog and CSV auto-archiving to maintain database performance'
        : 'Watchdog offline 65 detik dan auto-archive CSV untuk menjaga database tetap ringan',
      toolsSummary: ['ESP32', 'C++', 'DHT/MQ', 'Telemetry'],
      toolsSummaryExtra: '+2 more',
      statusTag: isEn ? 'Hardware & Firmware C++' : 'Hardware & Firmware C++',
      bannerBrand: 'ESP32 IoT',
      bannerSub: 'Environmental Telemetry & Watchdog',
      thumbnailImage: '/projects/smartfarm-iot/Thumbnail.png',
      screenshots: [
        {
          url: '/projects/smartfarm-iot/Screnshot1.png',
          caption: isEn
            ? '01. ESP32 Microcontroller & Multi-Sensor Hardware Circuit'
            : '01. Rangkaian Hardware Mikrokontroler ESP32 & Multi-Sensor',
        },
        {
          url: '/projects/smartfarm-iot/Screnshot2.png',
          caption: isEn
            ? '02. 60s Telemetry Cycle & 65s Offline Watchdog'
            : '02. Siklus Pengiriman Telemetri 60s & Watchdog Offline 65s',
        },
      ],
      githubUrl: 'https://github.com/Extluke/SmartFarm-El_Ayam',
      isPrivate: false,
      modalDetails: {
        title: isEn
          ? 'SmartFarm IoT Telemetry: ESP32 Environmental Sensors'
          : 'SmartFarm IoT Telemetry: Sensor Lingkungan Kandang ESP32',
        category: 'IoT & Embedded Systems',
        period: '2025 – 2026',
        summary: isEn
          ? 'Poultry coop environmental sensor telemetry architecture powered by ESP32 microcontrollers, streaming real-time metrics with offline protection.'
          : 'Arsitektur telemetri sensor lingkungan kandang ayam berbasis mikrokontroler ESP32 yang mengirimkan metrik real-time ke server pusat dengan proteksi offline.',
        keyOutcome: isEn
          ? 'Periodic 60-second telemetry streaming, 65-second offline watchdog, and CSV auto-archiving'
          : 'Pengiriman data berkala 60 detik, watchdog offline 65 detik, dan auto-archive CSV',
        tools: ['ESP32', 'C++', 'DHT22 / MQ Sensor', 'HTTP Client', 'CSV Auto-Archive'],
        deliverables: isEn
          ? [
              'C++ ESP32 microcontroller firmware sampling temperature, humidity, ammonia, and particulate matter accurately.',
              'Automated 60-second telemetry transmission cycle over HTTP REST API protocols.',
              'Devices automatically flagged offline on the dashboard if heartbeat signals cease for more than 65 seconds.',
              'Automated database hygiene: exports aged telemetry to CSV and purges expired event logs.',
            ]
          : [
              'Firmware C++ mikrokontroler ESP32 membaca sensor suhu, kelembapan, amonia, dan debu secara presisi.',
              'Siklus pengiriman telemetri otomatis tiap 60 detik via protokol HTTP REST API.',
              'Perangkat otomatis ditandai offline pada dashboard bila terdeteksi tidak mengirim heartbeat lebih dari 65 detik.',
              'Mekanisme otomatis pembersihan database: pengarsipan data lama ke CSV dan purge log kedaluwarsa.',
            ],
      },
    },
    {
      id: 'klinikku',
      categoryType: 'payment' as const,
      categoryLabel: 'BACKEND ENGINEERING & PAYMENT',
      badge: isEn ? '★ Escrow 90/10' : '★ Escrow 90/10',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      period: '2025',
      role: 'Spring Boot 3 & Midtrans Healthcare System',
      title: isEn
        ? 'KlinikKu — Multi-Role Telemedicine & Online Pharmacy'
        : 'KlinikKu — Telemedicine & Apotek Online Multi-Peran',
      problem: isEn
        ? 'Paper prescriptions risk misinterpretation and duplicate redemptions, while complicating pharmacy inventory reconciliation and payment payouts.'
        : 'Resep fisik rawan salah baca dan penebusan ganda, serta sulit direkonsiliasi dengan stok apotek dan pencairan pembayaran.',
      keyOutcome: isEn
        ? 'Midtrans 90/10 Escrow Settlement & Hexagonal Architecture with Anti-Double Redemption'
        : 'Integrasi Escrow Midtrans 90/10 & Arsitektur Hexagonal Anti-Double Redemption',
      toolsSummary: ['Java 21', 'Spring Boot 3', 'MySQL', 'Midtrans', 'STOMP'],
      toolsSummaryExtra: undefined,
      statusTag: isEn ? 'Escrow 90/10 & Anti-Double Redemption' : 'Escrow 90/10 & Anti-Double Redemption',
      bannerBrand: 'Spring Boot 3',
      bannerSub: 'Hexagonal Architecture & Midtrans Escrow',
      thumbnailImage: '/projects/klinikku/Thumbnail.png',
      screenshots: [
        {
          url: '/projects/klinikku/Screnshot1.png',
          caption: isEn ? '01. Multi-Role Authentication & Patient Dashboard' : '01. Autentikasi Multi-Peran & Dashboard Pasien',
        },
        {
          url: '/projects/klinikku/Screnshot2.png',
          caption: isEn ? '02. Doctor Consultations & Electronic Medical Records' : '02. Konsultasi Dokter & Rekam Medis Elektronik',
        },
        {
          url: '/projects/klinikku/Screnshot3.png',
          caption: isEn ? '03. Single-Use Digital Prescription Management' : '03. Manajemen Resep Digital Sekali Pakai',
        },
        {
          url: '/projects/klinikku/Screnshot4.png',
          caption: isEn ? '04. Pharmacy Inventory Integration & Medication Validation' : '04. Integrasi Stok Apotek & Validasi Obat',
        },
        {
          url: '/projects/klinikku/Screnshot5.png',
          caption: isEn ? '05. Midtrans Gateway Checkout & Escrow Holding' : '05. Pembayaran Midtrans Gateway & Dana Escrow',
        },
        {
          url: '/projects/klinikku/Screnshot6.png',
          caption: isEn ? '06. Delivery Dispatch & Real-Time Order Tracking' : '06. Pelacakan Pengiriman & Status Pesanan',
        },
        {
          url: '/projects/klinikku/Screnshot7.png',
          caption: isEn ? '07. Delivery Confirmation & Automated 90/10 Payout Split' : '07. Konfirmasi Penerimaan & Pembagian Dana Otomatis 90/10',
        },
        {
          url: '/projects/klinikku/Screnshot8.png',
          caption: isEn ? '08. Admin Control Panel & Transaction Reconciliation' : '08. Panel Admin & Rekonsiliasi Transaksi',
        },
      ],
      githubUrl: undefined,
      isPrivate: true,
      modalDetails: {
        title: isEn
          ? 'KlinikKu: Multi-Role Telemedicine & Online Pharmacy'
          : 'KlinikKu: Telemedicine & Apotek Online Multi-Peran',
        category: 'Backend Engineering & Payment Gateway',
        period: '2025',
        summary: isEn
          ? 'Online clinic and pharmacy platform featuring 5 user roles, single-use digital prescription enforcement, and automated payment escrow via Midtrans.'
          : 'Sistem klinik dan apotek online dengan 5 peran pengguna, proteksi penebusan resep digital tunggal, dan escrow pembayaran otomatis via Midtrans.',
        keyOutcome: isEn
          ? 'Midtrans 90/10 Escrow Settlement & Hexagonal Architecture with Anti-Double Redemption'
          : 'Integrasi Escrow Midtrans 90/10 & Arsitektur Hexagonal Anti-Double Redemption',
        tools: ['Java 21', 'Spring Boot 3', 'MySQL', 'Midtrans', 'WebSocket STOMP', 'Spring Security'],
        deliverables: isEn
          ? [
              'Five distinct user roles (patient, doctor, pharmacist, pharmacy owner, admin) secured via Spring Security.',
              'Single-use digital prescriptions guarded at both service and database levels to prevent duplicate redemptions.',
              'Midtrans payment escrow holding funds until Delivered status, automatically disbursing 90% to pharmacy and 10% to platform.',
              'Shipping module built with hexagonal architecture for plug-and-play third-party logistics courier APIs.',
            ]
          : [
              'Lima peran pengguna (pasien, dokter, apoteker, pemilik apotek, admin) diamankan dengan Spring Security.',
              'Resep digital sekali pakai yang dijaga di level database dan service untuk mencegah penebusan ganda.',
              'Pembayaran Midtrans dengan dana ditahan (escrow); pencairan otomatis 90% ke apotek dan 10% ke platform saat status Delivered.',
              'Modul pengiriman memakai arsitektur hexagonal agar siap disambung ke API kurir logistik.',
            ],
      },
    },
    {
      id: 'ximinton',
      categoryType: 'payment' as const,
      categoryLabel: 'FULL-STACK WEB & PAYMENT',
      badge: isEn ? '★ Zero-Conflict' : '★ Zero-Conflict',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      period: '2025',
      role: 'Laravel 12 & Midtrans Webhook Platform',
      title: isEn
        ? 'Ximinton — Automated Badminton Court Booking'
        : 'Ximinton — Reservasi Lapangan Badminton Otomatis',
      problem: isEn
        ? 'Manual chat bookings caused scheduling clashes, forcing administrators to verify payment receipts individually.'
        : 'Pencatatan manual lewat chat menyebabkan jadwal bentrok dan admin harus memeriksa bukti transfer satu per satu.',
      keyOutcome: isEn
        ? 'Zero-Conflict Pessimistic Locking & Idempotent SHA-512 Webhook Verification'
        : 'Pessimistic Locking Zero-Conflict Booking & Webhook Idempotency SHA-512',
      toolsSummary: ['Laravel 12', 'PHP', 'MySQL', 'Midtrans', 'REST API'],
      toolsSummaryExtra: undefined,
      statusTag: isEn ? 'Pessimistic Lock & Idempotent Webhook' : 'Pessimistic Lock & Idempotent Webhook',
      bannerBrand: 'Laravel 12',
      bannerSub: 'Pessimistic Locking & Idempotent Webhooks',
      thumbnailImage: '/projects/ximinton/Thumbnail.png',
      screenshots: [
        {
          url: '/projects/ximinton/Screnshot1.png',
          caption: isEn ? '01. Landing Page & Schedule Navigation' : '01. Landing Page & Navigasi Jadwal Lapangan',
        },
        {
          url: '/projects/ximinton/Screnshot2.png',
          caption: isEn ? '02. Court Selection & Time Slot Booking' : '02. Pemilihan Lapangan & Slot Waktu Booking',
        },
        {
          url: '/projects/ximinton/Screnshot3.png',
          caption: isEn ? '03. Real-Time Slot Availability Validation (Pessimistic Locking)' : '03. Validasi Ketersediaan Slot Real-Time (Pessimistic Locking)',
        },
        {
          url: '/projects/ximinton/Screnshot4.png',
          caption: isEn ? '04. Booking Summary & Reservation Form' : '04. Rincian Pemesanan & Form Reservasi',
        },
        {
          url: '/projects/ximinton/Screnshot5.png',
          caption: isEn ? '05. Midtrans Snap Payment Gateway Integration' : '05. Integrasi Checkout Pembayaran Midtrans Snap',
        },
        {
          url: '/projects/ximinton/Screnshot6.png',
          caption: isEn ? '06. Automated Payment Status Verification via Webhooks' : '06. Verifikasi Status Pembayaran Otomatis via Webhook',
        },
        {
          url: '/projects/ximinton/Screnshot7.png',
          caption: isEn ? '07. Digital Ticket & Booking Confirmation Code' : '07. Tiket Digital & Kode Booking Lapangan',
        },
        {
          url: '/projects/ximinton/Screnshot8.png',
          caption: isEn ? '08. Transaction History & User Schedule Dashboard' : '08. Riwayat Transaksi & Status Jadwal User',
        },
        {
          url: '/projects/ximinton/Screnshot9.png',
          caption: isEn ? '09. Cancellation Management & Refund Claims' : '09. Manajemen Pembatalan & Pengajuan Refund',
        },
        {
          url: '/projects/ximinton/Screnshot10.png',
          caption: isEn ? '10. Admin Dashboard — Court Occupancy Overview' : '10. Dashboard Admin — Ringkasan Okupansi Lapangan',
        },
        {
          url: '/projects/ximinton/Screnshot11.png',
          caption: isEn ? '11. Court Master Data & Rental Pricing' : '11. Manajemen Data Lapangan & Tarif Sewa',
        },
        {
          url: '/projects/ximinton/Screnshot12.png',
          caption: isEn ? '12. Operational Calendar & Maintenance Slot Blocking' : '12. Kalender Jadwal Operasional & Blokir Slot Perawatan',
        },
        {
          url: '/projects/ximinton/Screnshot13.png',
          caption: isEn ? '13. Revenue Reports & Financial Statements' : '13. Laporan Pendapatan & Rekap Keuangan',
        },
        {
          url: '/projects/ximinton/Screnshot14.png',
          caption: isEn ? '14. User Roles & Permission Hierarchy' : '14. Manajemen Pengguna & Hak Akses Berjenjang',
        },
        {
          url: '/projects/ximinton/Screnshot15.png',
          caption: isEn ? '15. Webhook Idempotency Settings & Security Audit Logs' : '15. Pengaturan Webhook Idempotency & Log Audit Keamanan',
        },
      ],
      githubUrl: undefined,
      isPrivate: true,
      modalDetails: {
        title: isEn
          ? 'Ximinton: Badminton Court Booking & Payment Automation'
          : 'Ximinton: Reservasi Lapangan Badminton & Otomasi Pembayaran',
        category: 'Full-Stack Web & Payment Integration',
        period: '2025',
        summary: isEn
          ? 'Badminton court reservation system with automatic online checkout, pessimistic lock double-booking prevention, and idempotent webhooks.'
          : 'Platform reservasi lapangan badminton dengan pembayaran online otomatis, pencegah double-booking lewat pessimistic lock, dan penanganan webhook idempoten.',
        keyOutcome: isEn
          ? 'Zero-Conflict Pessimistic Locking & Idempotent SHA-512 Webhook Verification'
          : 'Pessimistic Locking Zero-Conflict Booking & Webhook Idempotency SHA-512',
        tools: ['Laravel 12', 'PHP', 'MySQL', 'Midtrans', 'REST API Internal'],
        deliverables: isEn
          ? [
              'Eliminates double bookings using timestamp overlap checks and database pessimistic locking (lockForUpdate).',
              'Midtrans webhooks validated via SHA-512 signatures and engineered idempotently to safeguard order states against duplication.',
              'Cancellation policy enforceable up to 3 hours prior to slot, generating automated refund claim tickets.',
              'Three access tiers (user, admin, superadmin) with password re-prompting on sensitive administrative operations.',
            ]
          : [
              'Cegah double booking dengan pengecekan interval waktu dan pessimistic locking (lockForUpdate).',
              'Webhook Midtrans diverifikasi dengan signature SHA-512 dan dijaga idempoten agar status pesanan tidak tertimpa.',
              'Aturan pembatalan maksimal 3 jam sebelum jadwal, dengan tiket refund yang dibuat otomatis.',
              'Tiga level akses (user, admin, superadmin) dan konfirmasi ulang kata sandi untuk tindakan berisiko.',
            ],
      },
    },
  ];
}

export function getExperiences(lang: Language) {
  const isEn = lang === 'en';

  return [
    {
      id: 'modellyng-inkubasi',
      startDate: isEn ? 'AUGUST 2026' : 'AGUSTUS 2026',
      endDate: isEn ? 'PRESENT' : 'SEKARANG',
      subOrg: isEn ? 'Student Incubation Program' : 'Program Inkubasi Mahasiswa',
      division: 'MODELLYNG (AI RESEARCH ASSISTANT)',
      location: 'Purwokerto, Indonesia',
      role: 'CTO & Co-Developer',
      description: isEn
        ? 'Building an AI-powered scientific paper extraction system for students collaboratively with a teammate. Leading architectural decisions for the asynchronous backend, dual-LLM provider integration, and hybrid search retrieval.'
        : 'Membangun sistem ekstraksi paper ilmiah berbasis AI untuk mahasiswa secara bergantian dengan rekan satu tim. Memimpin keputusan arsitektur sistem backend asinkron, integrasi dual-LLM provider, dan retrieval berbasis hybrid search.',
      deliverables: isEn
        ? [
            'Designed a 10-stage asynchronous pipeline (FastAPI, Celery, Redis): PDF validation, bounding box text extraction, quality checks, document classification, 13-parameter scientific extraction, and verification.',
            'Ensured every extracted insight requires citations and page numbers mapped to original PDF text, renderable with interactive in-viewer highlighting.',
            'Implemented dual model providers (Gemini primary, Groq fallback) with rate-limiting and retry logic. If the primary model runs out of quota mid-run, the stage restarts with the fallback provider.',
            'Engineered atomic daily quotas in PostgreSQL with ledger audit logging and automated quota refunds whenever an extraction fails.',
            'Developed hybrid search combining pgvector HNSW vector indexing and BM25 full-text, merged via Reciprocal Rank Fusion (RRF) for project-level AI Q&A.',
          ]
        : [
            'Merancang pipeline asinkron 10 tahap (FastAPI, Celery, Redis): validasi PDF, ekstraksi teks & koordinat, pemeriksaan kualitas, klasifikasi jenis dokumen, ekstraksi 13 parameter ilmiah, dan verifikasi.',
            'Memastikan setiap hasil ekstraksi wajib memuat kutipan dan nomor halaman yang dicocokkan ke teks PDF asli serta dapat disorot (highlight) langsung di penampil PDF.',
            'Mengimplementasikan dua penyedia model (Gemini utama, Groq cadangan) dengan pembatasan laju dan retry. Bila model utama kehabisan kuota di tengah proses, tahap diulang dari awal dengan model cadangan.',
            'Membangun kuota harian atomik di PostgreSQL dengan buku besar penggunaan dan pengembalian kuota otomatis saat ekstraksi gagal.',
            'Mengembangkan pencarian hibrida menggabungkan pgvector HNSW dan BM25 full-text via Reciprocal Rank Fusion (RRF) untuk fitur tanya AI per proyek.',
          ],
      tools: 'Python   FastAPI   Celery   Redis   PostgreSQL + pgvector   Gemini API   Docker   React + TS',
    },
    {
      id: 'garudafood',
      startDate: isEn ? 'JULY 2025' : 'JULI 2025',
      endDate: isEn ? 'APRIL 2026' : 'APRIL 2026',
      subOrg: isEn ? 'Garuda Food Distributor — Tegal & Brebes' : 'Distributor Garuda Food — Tegal & Brebes',
      division: 'PT SINAR NIAGA SEJAHTERA',
      location: 'Tegal – Brebes, Indonesia',
      role: 'Sales Representative',
      description: isEn
        ? 'Managed 215 active retail partners, focusing on school cafeterias, restaurants, cooperatives, boarding schools, and minimarkets across the Tegal and Brebes territory.'
        : 'Mengelola 215 mitra aktif, fokus pada kantin sekolah, rumah makan, koperasi, pondok pesantren, dan minimarket di wilayah Tegal hingga Brebes.',
      deliverables: isEn
        ? [
            'Monthly sales revenue quota scaled from IDR 80M to IDR 160M; missed target only twice throughout the entire tenure.',
            'Active merchant accounts increased from 120 to 210 consistently transacting partners.',
            '80% of partner outlets consistently adopted and placed repeat orders for new product rollouts.',
            'Input daily orders via the Sales Order Mobile (SAM) application and coordinated delivery logistics to eliminate pending orders.',
          ]
        : [
            'Target penjualan bulanan naik dari Rp80 juta menjadi Rp160 juta; hanya 2 kali meleset selama masa kerja.',
            'Toko aktif naik dari 120 menjadi 210 mitra terdaftar dan bertransaksi aktif.',
            '80% mitra memesan dan melakukan repeat order produk baru secara konsisten.',
            'Setiap hari input pesanan lewat aplikasi Sales Order (SAM) dan mengawal pengiriman agar tidak ada pending order.',
          ],
      tools: 'Sales Order App (SAM)   Distribution Logistics   Key Account Management   Retail Negotiation',
    },
    {
      id: 'telkom-staff',
      startDate: isEn ? 'JANUARY 2025' : 'JANUARI 2025',
      endDate: isEn ? 'AUGUST 2025' : 'AGUSTUS 2025',
      subOrg: isEn ? 'Informatics Engineering Study Program' : 'Program Studi S1 Teknik Informatika',
      division: 'TELKOM UNIVERSITY PURWOKERTO',
      location: 'Purwokerto, Indonesia',
      role: isEn ? 'Student Staff (Content & Project Coordination)' : 'Student Staff (Konten & Koordinasi Proyek)',
      description: isEn
        ? 'Coordinated a cross-functional student team (content creators, graphic designers, and web developers) while reporting regularly to program faculty leads.'
        : 'Mengoordinasi tim kecil lintas divisi (konten, desain grafis, dan portal web) serta melapor rutin ke dosen penanggung jawab program studi.',
      deliverables: isEn
        ? [
            'Core committee member for an international webinar of ~500 participants; recruited and supervised 4 volunteers.',
            'Coordinated cross-divisional creative output for academic visual publications and digital portal content.',
            'Conducted regular evaluations and submitted milestone progress reports to supervising professors.',
          ]
        : [
            'Panitia inti webinar internasional dengan sekitar 500 peserta; merekrut dan memimpin 4 volunteer.',
            'Mengoordinasi tim kreatif lintas divisi untuk produksi konten publikasi visual dan web akademik.',
            'Melakukan evaluasi berkala dan pelaporan kemajuan program kerja kepada dosen pembina.',
          ],
      tools: 'Project Coordination   Team Leadership   Event Management   Academic Content   Google Workspace',
    },
    {
      id: 'aice',
      startDate: isEn ? 'JULY 2023' : 'JULI 2023',
      endDate: isEn ? 'JULY 2024' : 'JULI 2024',
      subOrg: isEn ? 'FMCG Ice Cream Distribution — Brebes' : 'FMCG Ice Cream Distribution — Brebes',
      division: 'PT DINGXIN BOGA INDONESIA (AICE)',
      location: 'Brebes (Tanjung – Losari)',
      role: isEn ? 'Sales Representative & Merchant Display' : 'Sales Representative & Merchant Display',
      description: isEn
        ? 'Managed approximately 240 retail accounts with an average of 30 store visits daily: audited inventory, booked orders, and consolidated shipment manifests for next-day delivery.'
        : 'Memegang sekitar 240 toko dengan rata-rata 30 kunjungan per hari: cek stok, ambil pesanan, rekap muatan untuk pengiriman armada H+1.',
      deliverables: isEn
        ? [
            'Maintained an average monthly volume of at least 4,000 cartons, consistently meeting or exceeding quota.',
            'Acquired ~50 new merchant outlets within one year through targeted route expansion and retail onboarding.',
            'Performed daily in-store audits for product availability, promotional displays, and refrigeration compliance.',
            'Consolidated logistics truckload manifests for accurate next-day delivery without invoice discrepancies.',
          ]
        : [
            'Menjaga penjualan rata-rata minimal 4.000 boks per bulan, tidak pernah di bawah target.',
            'Menambah sekitar 50 outlet baru dalam satu tahun melalui ekspansi rute dan akuisisi merchant.',
            'Melakukan kunjungan toko harian untuk audit stok, display produk, dan menjaga freezer compliance.',
            'Rekap muatan armada logistik untuk pengiriman tepat waktu H+1 tanpa ada selisih faktur.',
          ],
      tools: 'Route Planning   Inventory Stock Auditing   Daily Order Rekap   Merchant Display Standards',
    },
  ];
}

export function getCredentials(lang: Language) {
  const isEn = lang === 'en';

  return {
    gdgoc: {
      id: 'gdgoc',
      title: isEn ? '2nd Winner, GDGoC Member Project Championship' : 'Juara 2, GDGoC Member Project Championship',
      issuer: 'Google Developer Groups On Campus Telkom University Purwokerto',
      validity: '2026',
      regNumber: 'GDGoC 2026 · 2nd Winner Place',
      badge: isEn ? '2nd Winner Championship' : 'Juara 2 Championship',
      status: '2nd Winner Place',
      competencies: [
        'AI Model Training',
        'Predictive Analytics',
        'Academic Decision Support',
        'Evidence-Based AI',
        'Problem Solving',
      ],
      description: isEn
        ? 'Awarded 2nd Winner Place for engineering an AI-powered student Drop Out (DO) detection website enabling university academic counseling to deliver targeted student guidance. The AI evaluates student data parameters to compute risk probability evidence.'
        : 'Juara 2 atas pengembangan sistem website AI deteksi potensi Drop Out (DO) mahasiswa guna memfasilitasi pihak akademik & konseling kampus memberikan bimbingan tepat sasaran. AI membandingkan data mahasiswa, menganalisis parameter akademik, dan mengeluarkan evidence probabilitas risiko DO.',
      cardDescription: isEn
        ? '2nd Winner for developing an AI-driven student Drop Out (DO) detection website to empower targeted academic counseling based on parameter analytics & AI evidence.'
        : 'Juara 2 atas pengembangan website AI deteksi potensi Drop Out (DO) mahasiswa untuk memfasilitasi konseling akademik terarah berbasis analisis parameter data & evidence AI.',
      hasVerifyLink: false,
      imageUrl: '/certificates/cert-gdgoc-2026.jpg',
    },
    hcia: {
      id: 'hcia-ai',
      title: isEn ? 'HCIA-AI V4.0 (Course Completion Certificate)' : 'HCIA-AI V4.0 (Sertifikat Penyelesaian Kursus)',
      cardTitle: 'HCIA-AI V4.0',
      issuer: 'Huawei ICT Academy',
      validity: isEn ? 'March 24, 2026' : '24 Maret 2026',
      regNumber: 'ICT20260324000237',
      badge: 'Huawei ICT Academy',
      status: isEn ? 'Course & Exam Completed' : 'Course & Exam Completed',
      competencies: [
        'Machine Learning',
        'Deep Learning',
        'Computer Vision',
        'NLP Fundamentals',
        'Model Training',
      ],
      description: isEn
        ? 'Completed the study and exam for the HCIA-AI V4.0 Course on March 24, 2026.'
        : 'Menyelesaikan kursus dan ujian kursus HCIA-AI V4.0 pada 24 Maret 2026.',
      hasVerifyLink: true,
      verifyUrl: 'https://e.huawei.com/en/talent',
      imageUrl: '/certificates/cert-hcia-ai.png',
    },
    hcip: {
      id: 'hcip-bigdata',
      title: isEn ? 'HCIP-Big Data Developer V2.0 (Course Completion Certificate)' : 'HCIP-Big Data Developer V2.0 (Sertifikat Penyelesaian Kursus)',
      cardTitle: 'HCIP-Big Data Developer V2.0',
      issuer: 'Huawei ICT Academy',
      validity: isEn ? 'April 7, 2026' : '7 April 2026',
      regNumber: '20260407000001',
      badge: 'Huawei ICT Academy',
      status: isEn ? 'Course & Exam Completed' : 'Course & Exam Completed',
      competencies: [
        'Big Data Architecture',
        'Distributed Computing',
        'Hadoop & Spark',
        'Data Processing',
        'Data Warehousing',
      ],
      description: isEn
        ? 'Completed the study and exam for the HCIP-Big Data Developer V2.0 Course on April 7, 2026.'
        : 'Menyelesaikan kursus dan ujian kursus HCIP-Big Data Developer V2.0 pada 7 April 2026.',
      hasVerifyLink: true,
      verifyUrl: 'https://e.huawei.com/en/talent',
      imageUrl: '/certificates/cert-hcip-bigdata.png',
    },
  };
}
