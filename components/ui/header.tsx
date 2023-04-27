import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="24.000000pt" viewBox="0 0 3560.000000 714.000000" preserveAspectRatio="xMidYMid meet">
                <g transform="translate(0.000000,714.000000) scale(0.100000,-0.100000)"
                fill="#1A1A1A" stroke="none">
                  <path d="M450 5834 c0 -617 3 -774 13 -768 10 7 1702 1427 1805 1516 l33 28
                  -926 0 -925 0 0 -776z"/>
                  <path d="M4585 6591 c18 -16 1776 -1487 1818 -1520 16 -13 17 27 17 763 l0
                  776 -927 0 c-904 0 -927 0 -908 -19z"/>
                  <path d="M2680 3515 l0 -3085 755 0 755 0 0 3085 0 3085 -755 0 -755 0 0
                  -3085z"/>
                  <path d="M18200 6580 c-255 -68 -450 -257 -541 -525 -21 -61 -24 -89 -24 -215
                  0 -124 3 -156 23 -220 72 -230 241 -410 462 -490 418 -153 869 76 990 502 112
                  391 -117 814 -505 938 -103 33 -302 38 -405 10z"/>
                  <path d="M7670 2895 l0 -2465 755 0 755 0 0 2465 0 2465 -755 0 -755 0 0
                  -2465z"/>
                  <path d="M10365 5334 c-272 -54 -484 -242 -578 -512 -28 -81 -30 -98 -31 -232
                  -1 -157 9 -203 64 -327 82 -182 242 -328 438 -401 96 -36 99 -36 252 -37 138
                  0 163 3 225 24 247 84 414 245 507 489 32 85 32 90 32 247 0 155 -1 162 -32
                  244 -18 47 -50 114 -71 150 -163 273 -492 418 -806 355z"/>
                  <path d="M12153 4788 c157 -310 713 -1413 1237 -2453 524 -1039 955 -1893 959
                  -1897 3 -4 197 370 430 830 l423 837 -121 240 c-67 132 -434 862 -817 1623
                  l-695 1382 -850 0 -851 0 285 -562z"/>
                  <path d="M15505 5344 c-105 -21 -139 -31 -207 -59 -200 -85 -353 -255 -425
                  -473 -25 -79 -28 -100 -28 -227 0 -107 5 -154 19 -200 79 -256 245 -435 485
                  -523 86 -31 109 -36 222 -40 105 -4 139 -1 210 17 224 56 412 205 509 406 65
                  134 75 181 75 345 0 136 -2 150 -31 232 -61 172 -159 300 -297 391 -96 64
                  -190 103 -294 123 -69 13 -191 17 -238 8z"/>
                  <path d="M21430 3440 c0 -1322 3 -1941 11 -2012 20 -183 107 -404 220 -552
                  260 -344 711 -508 1138 -415 129 28 285 96 396 173 59 41 755 585 785 613 13
                  12 -56 13 -512 7 l-528 -7 0 2051 0 2052 -755 0 -755 0 0 -1910z"/>
                  <path d="M24290 2890 l0 -2460 583 0 c320 0 660 -3 755 -7 l172 -6 0 2466 0
                  2467 -755 0 -755 0 0 -2460z"/>
                  <path d="M30690 5344 c-160 -25 -269 -58 -394 -122 -87 -45 -175 -109 -729
                  -540 l-208 -162 530 0 531 0 0 -2045 0 -2045 760 0 761 0 -4 1977 c-3 2219 4
                  2022 -78 2227 -138 346 -395 575 -759 677 -115 32 -311 47 -410 33z"/>
                  <path d="M33570 5345 c-8 -2 -48 -9 -89 -15 -125 -21 -294 -85 -398 -152 -28
                  -18 -220 -166 -427 -328 l-374 -295 504 -3 504 -2 0 -2060 0 -2060 760 0 760
                  0 0 1903 c0 1109 -4 1942 -10 1999 -38 392 -270 729 -620 899 -155 75 -295
                  109 -475 114 -66 2 -127 2 -135 0z"/>
                  <path d="M28318 4753 l-747 -588 0 -1867 -1 -1868 750 0 750 0 0 2455 c0 1350
                  -1 2455 -3 2455 -1 0 -339 -264 -749 -587z"/>
                  <path d="M17632 2938 l3 -1573 28 -95 c83 -285 251 -512 491 -665 341 -217
                  796 -226 1147 -22 31 17 238 174 461 347 l405 315 -519 3 -518 2 0 1630 0
                  1630 -750 0 -750 0 2 -1572z"/>
                </g>
              </svg>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="#features-id"
                  className="font-medium text-[#1A1A1A] hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing-id"
                  className="font-medium text-[#1A1A1A] hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#faq-id"
                  className="font-medium text-[#1A1A1A] hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-[#1A1A1A] hover:text-gray-300 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link href="/signup" className="btn-sm text-white bg-[#5D5DFF] hover:bg-[#38379C] ml-3 px-3 py-2 flex items-center rounded-md">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
