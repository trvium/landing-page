'use client'

export default function ApiKey() {
  const apiKey = 'b9418fcfb5b19843741b00446cf88b3f';

  const handleCopy = () => {
    navigator.clipboard.writeText(apiKey);
  };

  return (
    <section>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center" data-aos="fade-up" data-aos-delay="150">
        <div className="mb-60">
          <div className="bg-white rounded-md p-4 shadow-lg">

            {/* Desktop */}
            <div className="font-medium text-1xl mb-2 flex items-center">
              <svg className="hidden sm:inline" width="30px" height="30px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <circle cx="512" cy="512" r="512" fill="#D9D9D9"/>
                <path d="M407.9 757.5c-38.8 0-77.6-14.6-107.4-44l-1.4-1.4-.2-.2c-58.6-60.6-56.9-157.6 3.8-216.1 28.6-27.7 66.4-42.9 106.2-42.9 31.2 0 61.2 9.4 86.4 26.8L700.8 274c10.1-10.1 26.5-10.1 36.6 0 10.1 10.1 10.1 26.5 0 36.6l-27.9 27.9 51 51c10.1 10.1 10.1 26.5 0 36.6l-80.8 80.8c-10.1 10.1-26.5 10.1-36.6 0l-51-51-59.8 59.8c42.5 59.3 37.5 142.6-15.5 196.3-29.9 30.3-69.4 45.5-108.9 45.5zM336 675.8l.8.8c39.7 39.2 103.9 38.8 143.1-.9 38.9-39.4 38.8-103-.1-142.2-.2-.2-.4-.4-.7-.6-39.4-38.1-101.2-38.1-140.6 0-40 38.7-41.2 102.8-2.5 142.9zm292.6-256.5 32.7 32.7 44.3-44.3-32.7-32.7-44.3 44.3z" fill="#666666"/>
              </svg>
              <span className="ml-4 text-2xl hidden sm:inline">API Key</span>
              <span className="ml-auto mr-2 font-bold hidden sm:inline">{apiKey}</span>
              <button onClick={() => handleCopy()}>
                <svg className="ml-2 hidden sm:inline" width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 7H11C10.4239 7 10 7.42386 10 8V10H8C7.42386 10 7 10.4239 7 11V16C7 16.5761 7.42386 17 8 17H13C13.5761 17 14 16.5761 14 16V14H16C16.5761 14 17 13.5761 17 13V8C17 7.42386 16.5761 7 16 7ZM8 11H10V13C10 13.5761 10.4239 14 11 14H13V16H8V11ZM11 13V8H16V13H11Z" fill="#8EE8C9"/>
                </svg>
              </button>
            </div>

            {/* Mobile */}
            <div className="sm:hidden mb-2">
              <div>
                <span className="text-2xl">API Key</span>
              </div>
              <div>
                <span className="font-bold text-sm">{apiKey}</span>
              </div>
              <button onClick={() => handleCopy()}>
                <svg width="36px" height="36px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16 7H11C10.4239 7 10 7.42386 10 8V10H8C7.42386 10 7 10.4239 7 11V16C7 16.5761 7.42386 17 8 17H13C13.5761 17 14 16.5761 14 16V14H16C16.5761 14 17 13.5761 17 13V8C17 7.42386 16.5761 7 16 7ZM8 11H10V13C10 13.5761 10.4239 14 11 14H13V16H8V11ZM11 13V8H16V13H11Z" fill="#8EE8C9"/>
                </svg>
              </button>
            </div>

            {/* Mobile */}
            <button className="mt-4 px-4 py-2 rounded-md bg-purple-300 text-white hover:bg-purple-400">Generate</button>

          </div>
        </div>
      </div>
    </section>
  )
}