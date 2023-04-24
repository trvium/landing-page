import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <svg version="1.0" xmlns="http://www.w3.org/2000/svg" height="16.000000pt" viewBox="0 0 3560.000000 714.000000" preserveAspectRatio="xMidYMid meet">
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
              <div className="text-[#666666]">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-[#1A1A1A] font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-[#666666] hover:text-[#D9D9D9] transition duration-150 ease-in-out">About</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-[#666666] hover:text-[#D9D9D9] transition duration-150 ease-in-out">Pricing</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-[#666666] hover:text-[#D9D9D9] transition duration-150 ease-in-out">FAQ</Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-[#1A1A1A] font-medium mb-1">Legal</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-[#666666] hover:text-[#D9D9D9] transition duration-150 ease-in-out">Terms & Conditions</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-[#666666] hover:text-[#D9D9D9] transition duration-150 ease-in-out">Privacy Policy</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-[#1A1A1A] font-medium mb-1">Help</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-[#666666] hover:text-[#D9D9D9] transition duration-150 ease-in-out">Status</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="/" className="flex justify-center items-center text-[#FF8C00] bg-[#D9D9D9] hover:text-[#D9D9D9] hover:bg-[#FF8C00] rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-[#FF8C00] bg-[#D9D9D9] hover:text-[#D9D9D9] hover:bg-[#FF8C00] rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-[#FF8C00] bg-[#D9D9D9] hover:text-[#D9D9D9] hover:bg-[#FF8C00] rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-[#FF8C00] bg-[#D9D9D9] hover:text-[#D9D9D9] hover:bg-[#FF8C00] rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-[#FF8C00] bg-[#D9D9D9] hover:text-[#D9D9D9] hover:bg-[#FF8C00] rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-[#666666] text-sm mr-4">&copy; Trvium.com. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
