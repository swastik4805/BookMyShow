
import { Link ,useNavigate } from "react-router-dom";
import { DropDownList } from "./DropDownList";
// import { FaSearch } from "react-icons/fa";

export const Header = () => {
    const navigate = useNavigate()

    const handleSubmit =(e) =>{
      e.preventDefault();
      const queryTerm = e.target.search.value;
      // console.log(queryTerm);
      e.target.reset();
      return navigate(`/search?q=${queryTerm}`);
    }

    

    return (
      <header>
        <nav>
          <div className="container flex items-center justify-between mx-auto p-1">

            <div className="flex">

              <div>
                
                
              <Link to="/" className="flex items-center pr-3">
                <svg width="115" height="33" viewBox="0 0 115 33" fill="none">
                  <g clipPath="url(#clip0_6398_17562)"><path d="M72.4622 9.6674L70.5729 6.44009L67.1867 8.05374L65.2974 4.82643L61.9112 6.44009L60.0219 3.21278L56.6357 4.82643L54.7464 1.59912L51.3602 3.21278L49.4709 0L46.0847 1.61366L38.9199 24.9317L47.6252 27.5921C48.2065 25.7167 49.965 24.3357 52.0287 24.3357C54.572 24.3357 56.6357 26.4 56.6357 28.9441C56.6357 28.9731 56.6357 29.0022 56.6357 29.0313C56.6502 29.4529 56.6066 29.8744 56.4758 30.2815L65.3265 32.9855L72.4622 9.6674Z" fill="#D71920"></path><path d="M46.3747 22.9982C45.9242 22.9109 45.6045 22.533 45.6045 22.0678V10.6559C45.6045 10.118 46.026 9.71094 46.5491 9.71094H54.7894C55.0074 9.71094 55.2254 9.72547 55.4288 9.76909C57.2019 10.0889 58.4953 11.6153 58.4953 13.418V22.0823C58.4953 22.344 58.3936 22.5766 58.2047 22.7656C58.0303 22.94 57.7832 23.0418 57.5361 23.0418C57.478 23.0418 57.4199 23.0418 57.3617 23.0272C56.9112 22.94 56.5915 22.562 56.5915 22.0968V13.4034C56.5915 12.5312 55.9666 11.7898 55.0946 11.6299C54.9928 11.6153 54.8911 11.6008 54.7894 11.6008H52.9873V22.0678C52.9873 22.3294 52.8856 22.562 52.6966 22.751C52.5222 22.9255 52.2752 23.0272 52.0281 23.0272C51.97 23.0272 51.9118 23.0272 51.8537 23.0127C51.4032 22.9255 51.0835 22.5475 51.0835 22.0823V11.6153H47.4793V22.0823C47.4793 22.344 47.3775 22.5766 47.1886 22.7656C47.0142 22.94 46.7671 23.0418 46.5201 23.0418C46.491 23.0127 46.4329 23.0127 46.3747 22.9982Z" fill="white"></path><path d="M60.0945 27.9846C59.6439 27.912 59.3242 27.5194 59.3242 27.0542C59.3242 26.7926 59.4259 26.56 59.6003 26.3855C59.7747 26.2111 60.0218 26.1093 60.2834 26.1093C61.0827 26.1093 61.7803 25.586 62.0128 24.83L62.9865 21.5591L59.7747 10.845C59.6149 10.3362 59.9055 9.7983 60.4142 9.65292C60.5595 9.60931 60.6903 9.60931 60.8357 9.63839C61.1844 9.69654 61.4751 9.94367 61.5914 10.278L63.9748 18.2736L66.3873 10.278C66.5035 9.82737 66.9831 9.53662 67.4918 9.62385L67.5645 9.63839C68.0731 9.7983 68.3638 10.3362 68.2039 10.845L64.9049 21.8498L63.8585 25.3679C63.5969 26.182 63.1319 26.8362 62.5215 27.2723C61.8675 27.752 61.0972 28.0137 60.2979 28.0137C60.2107 27.9992 60.1526 27.9846 60.0945 27.9846Z" fill="white"></path><path d="M0.799318 22.882C0.319727 22.7948 0 22.4023 0 21.908V4.87014C0 4.59393 0.101731 4.34679 0.290661 4.17234C0.479591 3.98335 0.726652 3.88159 0.988247 3.88159C1.04638 3.88159 1.10451 3.88159 1.16264 3.89613C1.64223 3.98335 1.97649 4.3904 1.97649 4.87014V9.7111H3.85126C4.06925 9.7111 4.30178 9.72564 4.51978 9.76925C6.36547 10.0891 7.70251 11.6882 7.70251 13.5635V19.0587C7.70251 21.1811 5.97308 22.9111 3.85126 22.9111H0.988247C0.930115 22.8966 0.85745 22.8966 0.799318 22.882ZM1.97649 20.9195H3.85126C4.8831 20.9195 5.72602 20.0763 5.72602 19.0441V13.5635C5.72602 12.6477 5.07203 11.8772 4.17098 11.7173C4.06925 11.7027 3.95299 11.6882 3.85126 11.6882H1.97649V20.9195Z" fill="#333333"></path><path d="M13.3996 22.9545C11.5685 22.6347 10.2314 21.0356 10.2314 19.1602V13.447C10.2314 12.4149 10.6238 11.4554 11.3505 10.7285C12.0771 10.0016 13.0363 9.60913 14.0682 9.60913C14.2862 9.60913 14.5187 9.62367 14.7367 9.66728C16.5824 9.9871 17.9194 11.5862 17.9194 13.4616V19.1748C17.9194 20.2069 17.5125 21.1664 16.7858 21.8933C16.0592 22.6201 15.1 23.0127 14.0682 23.0127C13.8502 23.0127 13.6176 22.9981 13.3996 22.9545ZM14.3879 11.6008C14.2862 11.5862 14.1699 11.5717 14.0682 11.5717C13.0218 11.5717 12.1934 12.4003 12.1934 13.447V19.1602C12.1934 20.0761 12.8329 20.8466 13.7339 21.0065C13.8356 21.021 13.9519 21.0356 14.0682 21.0356C15.1 21.0356 15.9429 20.1924 15.9429 19.1602V13.447C15.9429 12.5312 15.2889 11.7607 14.3879 11.6008Z" fill="#333333"></path><path d="M23.6164 22.9546C21.7853 22.6348 20.4482 21.0357 20.4482 19.1604V13.4472C20.4482 11.3247 22.1777 9.59473 24.2995 9.59473C24.5175 9.59473 24.75 9.60926 24.968 9.65288C26.8137 9.9727 28.1508 11.5718 28.1508 13.4472V19.1604C28.1508 20.1925 27.7438 21.152 27.0172 21.8789C26.2905 22.6057 25.3313 22.9983 24.2995 22.9983C24.067 23.0128 23.8344 22.9983 23.6164 22.9546ZM24.6192 11.6009C24.5175 11.5864 24.4012 11.5718 24.2995 11.5718C23.2531 11.5718 22.4247 12.4005 22.4247 13.4472V19.1604C22.4247 20.0762 23.0642 20.8467 23.9652 21.0066C24.067 21.0212 24.1832 21.0357 24.2995 21.0357C24.7936 21.0357 25.2587 20.8467 25.622 20.4978C25.9853 20.1489 26.1743 19.6692 26.1743 19.1749V13.4472C26.1743 12.5313 25.5203 11.7608 24.6192 11.6009Z" fill="#333333"></path><path d="M31.479 22.9983C30.9994 22.9111 30.6797 22.5186 30.6797 22.0243V4.87014C30.6797 4.59393 30.7814 4.34679 30.9703 4.17234C31.1593 3.98335 31.4063 3.88159 31.6679 3.88159C31.7261 3.88159 31.7842 3.88159 31.8423 3.89613C32.3219 3.98335 32.6562 4.3904 32.6562 4.87014V15.0318L37.205 9.94371C37.4376 9.69657 37.7718 9.58027 38.1206 9.63842C38.3095 9.6675 38.4694 9.75472 38.6147 9.87102C39.0217 10.249 39.0507 10.8596 38.6874 11.2666L35.2576 15.09L38.8182 21.5882C38.949 21.8063 38.9781 22.0679 38.9054 22.3151C38.8327 22.5622 38.6583 22.7803 38.4258 22.8966C38.2369 23.0129 38.0043 23.042 37.7718 23.0129C37.4812 22.9547 37.2196 22.7948 37.0888 22.5477L33.8915 16.6746L32.6707 18.012V22.0534C32.6707 22.3151 32.569 22.5768 32.3801 22.7657C32.1911 22.9547 31.9441 23.042 31.6825 23.042C31.5953 23.0129 31.5371 23.0129 31.479 22.9983Z" fill="#333333"></path><path d="M75.0491 22.9836C73.9446 22.7946 73.0435 22.155 72.4767 21.1809C72.3459 20.9629 72.3168 20.6867 72.3895 20.425C72.4622 20.1633 72.622 19.9598 72.84 19.829C73.029 19.7127 73.276 19.6836 73.5086 19.7127C73.7992 19.7708 74.0608 19.9307 74.1916 20.1924C74.4532 20.6285 74.8601 20.9193 75.3688 21.0065C75.921 21.0937 76.4152 20.9483 76.8366 20.5849C77.2145 20.236 77.4179 19.7272 77.3598 19.2329C77.3307 18.7096 77.0837 18.2589 76.6477 17.9536L73.9881 16.0638C73.1162 15.4532 72.5639 14.4792 72.4767 13.3889C72.4186 12.284 72.84 11.2373 73.6394 10.5395C74.4241 9.81267 75.4996 9.47831 76.575 9.62368C77.6941 9.82721 78.6097 10.4523 79.1328 11.3827C79.2636 11.6008 79.2927 11.877 79.22 12.1241C79.1474 12.3858 78.9875 12.6039 78.7695 12.7202C78.5806 12.8365 78.3335 12.8655 78.1155 12.8365C77.8249 12.7783 77.5633 12.6184 77.4325 12.3567C77.2145 11.9642 76.793 11.688 76.3134 11.6008C75.8048 11.5135 75.3397 11.6589 74.9764 11.9933C74.6421 12.3131 74.4532 12.7783 74.4823 13.258C74.5113 13.7232 74.7729 14.1739 75.1653 14.4501L77.8249 16.3109C78.7405 16.9651 79.3072 17.9827 79.3654 19.1021C79.4526 20.2215 79.0166 21.2827 78.1737 22.0387C77.3744 22.7946 76.2698 23.129 75.1508 22.9836H75.0491Z" fill="#333333"></path><path d="M82.6928 23.0127C82.2132 22.9255 81.8789 22.5185 81.8789 22.0387V4.88454C81.8789 4.62287 81.9806 4.36119 82.1696 4.17221C82.3585 3.99776 82.6056 3.896 82.8672 3.896C82.9253 3.896 82.9979 3.896 83.0561 3.91053C83.5357 3.99776 83.8554 4.39027 83.8554 4.88454V9.72551H85.7302C85.9627 9.72551 86.1807 9.74005 86.4132 9.78366C88.2444 10.1035 89.5814 11.7026 89.5814 13.5779V22.0387C89.5814 22.5912 89.1454 23.0273 88.5932 23.0273C88.535 23.0273 88.4769 23.0273 88.4188 23.0127C87.9392 22.9255 87.6049 22.5185 87.6049 22.0387V13.5779C87.6049 12.6621 86.9655 11.8916 86.0644 11.7317C85.9627 11.7171 85.8464 11.7026 85.7302 11.7026H83.8554V22.0387C83.8554 22.5912 83.4194 23.0273 82.8672 23.0273C82.809 23.0273 82.7509 23.0273 82.6928 23.0127Z" fill="#333333"></path><path d="M95.2639 22.969C93.4327 22.6492 92.0957 21.0501 92.0957 19.1748V13.4616C92.0957 11.3391 93.8251 9.60913 95.9469 9.60913C96.1649 9.60913 96.3975 9.62367 96.6155 9.66728C98.4612 9.9871 99.7982 11.5862 99.7982 13.4616V19.1893C99.7982 20.2215 99.3913 21.1809 98.6646 21.9078C97.938 22.6347 96.9788 23.0272 95.9469 23.0272C95.7144 23.0272 95.4819 23.0127 95.2639 22.969ZM96.2667 11.6153C96.1649 11.6008 96.0487 11.5862 95.9469 11.5862C95.4383 11.5862 94.9732 11.7752 94.6244 12.1386C94.2756 12.4875 94.0722 12.9673 94.0722 13.4616V19.1893C94.0722 20.1052 94.7116 20.8757 95.6127 21.0356C95.729 21.0501 95.8307 21.0646 95.9469 21.0646C96.4411 21.0646 96.9061 20.8757 97.2694 20.5268C97.6328 20.1779 97.8217 19.6981 97.8217 19.2038V13.4616C97.8072 12.5457 97.1532 11.7752 96.2667 11.6153Z" fill="#333333"></path><path d="M114.971 10.8303C115.029 10.5832 115 10.3215 114.869 10.1035C114.738 9.88541 114.506 9.7255 114.229 9.65281C114.171 9.63827 114.113 9.63827 114.055 9.63827C113.604 9.63827 113.212 9.94356 113.096 10.3797C113.081 10.4233 112.02 14.7118 111.192 17.9682L111.177 18.0409L111.163 17.9682C110.349 14.7118 109.274 10.4233 109.259 10.3797C109.172 10.0017 108.881 9.71096 108.503 9.65281C108.445 9.63827 108.387 9.63827 108.329 9.63827C107.893 9.63827 107.515 9.94356 107.384 10.3797C107.37 10.4233 106.309 14.7118 105.48 17.9682L105.466 18.0409L105.451 17.9682C104.638 14.7118 103.562 10.4233 103.548 10.3797C103.46 10.0017 103.155 9.7255 102.777 9.65281C102.647 9.62374 102.516 9.63827 102.385 9.66735C101.862 9.79819 101.542 10.3215 101.673 10.8303L104.536 22.2713C104.638 22.6493 104.943 22.9255 105.306 22.9982C105.35 23.0127 105.408 23.0127 105.466 23.0127C105.931 23.0127 106.309 22.722 106.396 22.2713C106.411 22.2277 107.486 17.9392 108.3 14.6682L108.314 14.5955L108.329 14.6682C109.172 17.9537 110.233 22.2713 110.233 22.2713C110.349 22.6493 110.64 22.9255 111.003 22.9982C111.061 23.0127 111.105 23.0127 111.163 23.0127C111.628 23.0127 112.006 22.7074 112.093 22.2713L114.971 10.8303Z" fill="#333333"></path></g><defs><clipPath id="clip0_6398_17562"><rect width="115" height="33" fill="white"></rect></clipPath></defs>
                  </svg>
              </Link>
              </div>
                  {/* <div className="flex items-center bg-white rounded-lg border border-gray-300 p-2" style={{ width:'' }}>
                <FaSearch className="text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search for Movies, Events, Plays, etc"
                  value={''}
                  onSubmit={handleSubmit}
                  className="outline-none w-full"
                />
              </div> */}

              <div className={`relative hidden  md:block`}>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      name="search"
                      className="block w-fit p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
                      placeholder="Search for Movies, Events, Plays, etc"
                    />
                  </form>
              </div>
            </div>
            
            <div className="flex">
              <DropDownList></DropDownList>
              <div className="bg-red-400 rounded-lg px-3">Sign in</div>
            </div>
            
          </div>
        </nav>
      </header>
    );
};
