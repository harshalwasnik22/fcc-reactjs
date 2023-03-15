import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <div class="hero-text" >
                <div class="text-scramble" data-value="FINANCE AND CONSULTING CLUB">FINANCE AND CONSULTING CLUB</div>
                <p>FCC is an initiative taken by the students of NIT Raipur. We are the group of like minded students interested to promote the Financial and Consulting awareness.</p>
                <a href="#about"><button type="button">KNOW MORE</button></a>
          </div>
          <div class="social">
            <h3>REACH US</h3>
            <a href="https://www.instagram.com/fccnitrr/"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/finance-nitrr/"><i class="fa-brands fa-linkedin"></i></a>
          </div>
          
        </div>
        <div className="hero-right">
        <svg width="460" height="379" viewBox="0 0 460 379" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M459.309 140.5C459.309 217.82 396.629 280.5 319.309 280.5C241.989 280.5 179.309 217.82 179.309 140.5C179.309 63.1801 241.989 0.500022 319.309 0.500022C396.629 0.500022 459.309 63.1801 459.309 140.5Z" fill="url(#paint0_linear_0_1)"/>
<path d="M275.316 272C275.316 331.094 227.411 379 168.316 379C109.222 379 61.3162 331.094 61.3162 272C61.3162 212.906 109.222 165 168.316 165C227.411 165 275.316 212.906 275.316 272Z" fill="url(#paint1_linear_0_1)"/>
<path d="M244.088 31L256.912 2.99999H259.832L272.608 31H269.488L257.751 4.71999H258.951L247.168 31H244.088ZM249.134 23.52L250.016 21.12H266.296L267.174 23.52H249.134ZM287.378 9.79999C289.085 9.79999 290.578 10.1333 291.857 10.8C293.163 11.44 294.176 12.4267 294.895 13.76C295.64 15.0933 296.012 16.7733 296.01 18.8L296 31H293.16L293.17 19.08C293.172 16.8667 292.613 15.2 291.494 14.08C290.402 12.9333 288.856 12.36 286.856 12.36C285.363 12.36 284.056 12.6667 282.935 13.28C281.841 13.8667 280.987 14.7333 280.373 15.88C279.785 17 279.491 18.36 279.489 19.96L279.48 31H276.64L276.658 9.99999H279.378L279.373 15.76L278.934 14.68C279.602 13.16 280.67 11.9733 282.137 11.12C283.604 10.24 285.352 9.79999 287.378 9.79999ZM316.831 31L316.835 26.36L316.716 25.6L316.722 17.84C316.724 16.0533 316.219 14.68 315.206 13.72C314.22 12.76 312.741 12.28 310.767 12.28C309.407 12.28 308.114 12.5067 306.887 12.96C305.66 13.4133 304.619 14.0133 303.765 14.76L302.487 12.64C303.554 11.7333 304.835 11.04 306.329 10.56C307.823 10.0533 309.396 9.79999 311.049 9.79999C313.769 9.79999 315.862 10.48 317.328 11.84C318.82 13.1733 319.565 15.2133 319.562 17.96L319.551 31H316.831ZM309.591 31.2C308.017 31.2 306.644 30.9467 305.471 30.44C304.325 29.9067 303.446 29.1867 302.833 28.28C302.221 27.3467 301.915 26.28 301.916 25.08C301.917 23.9867 302.171 23 302.679 22.12C303.213 21.2133 304.067 20.4933 305.241 19.96C306.441 19.4 308.041 19.12 310.041 19.12H317.281L317.279 21.24H310.119C308.093 21.24 306.679 21.6 305.879 22.32C305.105 23.04 304.717 23.9333 304.716 25C304.715 26.2 305.181 27.16 306.114 27.88C307.046 28.6 308.353 28.96 310.033 28.96C311.633 28.96 313.006 28.6 314.154 27.88C315.328 27.1333 316.182 26.0667 316.716 24.68L317.355 26.64C316.82 28.0267 315.886 29.1333 314.552 29.96C313.244 30.7867 311.591 31.2 309.591 31.2ZM327.265 31L327.291 1.31999H330.131L330.105 31H327.265ZM338.16 38.96C337.173 38.96 336.227 38.8 335.32 38.48C334.441 38.16 333.681 37.68 333.042 37.04L334.363 34.92C334.896 35.4266 335.469 35.8133 336.082 36.08C336.722 36.3733 337.429 36.52 338.202 36.52C339.135 36.52 339.936 36.2533 340.603 35.72C341.297 35.2133 341.951 34.3066 342.565 33L343.928 29.92L344.248 29.48L352.905 9.99999H355.705L345.165 33.52C344.577 34.88 343.923 35.96 343.202 36.76C342.508 37.56 341.747 38.12 340.92 38.44C340.093 38.7866 339.173 38.96 338.16 38.96ZM343.766 31.6L334.105 9.99999H337.065L345.608 29.28L343.766 31.6ZM365.092 31.2C363.359 31.2 361.719 30.96 360.173 30.48C358.626 29.9733 357.414 29.3467 356.534 28.6L357.816 26.36C358.669 27 359.762 27.56 361.095 28.04C362.428 28.4933 363.828 28.72 365.294 28.72C367.294 28.72 368.734 28.4133 369.615 27.8C370.496 27.16 370.936 26.32 370.937 25.28C370.938 24.5067 370.685 23.9067 370.179 23.48C369.699 23.0267 369.059 22.6933 368.26 22.48C367.46 22.24 366.567 22.04 365.58 21.88C364.594 21.72 363.607 21.5333 362.621 21.32C361.661 21.1067 360.781 20.8 359.981 20.4C359.182 19.9733 358.529 19.4 358.023 18.68C357.544 17.96 357.304 17 357.305 15.8C357.306 14.6533 357.627 13.6267 358.268 12.72C358.909 11.8133 359.843 11.1067 361.07 10.6C362.324 10.0667 363.844 9.79999 365.631 9.79999C366.991 9.79999 368.351 9.98666 369.71 10.36C371.07 10.7067 372.19 11.1733 373.069 11.76L371.827 14.04C370.894 13.4 369.895 12.9467 368.828 12.68C367.762 12.3867 366.695 12.24 365.629 12.24C363.735 12.24 362.335 12.5733 361.428 13.24C360.547 13.88 360.106 14.7067 360.106 15.72C360.105 16.52 360.344 17.1467 360.824 17.6C361.33 18.0533 361.983 18.4133 362.783 18.68C363.609 18.92 364.503 19.12 365.462 19.28C366.449 19.44 367.422 19.64 368.382 19.88C369.368 20.0933 370.261 20.4 371.061 20.8C371.887 21.1733 372.54 21.72 373.02 22.44C373.526 23.1333 373.778 24.0533 373.777 25.2C373.776 26.4267 373.429 27.4933 372.734 28.4C372.067 29.28 371.08 29.9733 369.773 30.48C368.492 30.96 366.932 31.2 365.092 31.2ZM387.903 31.2C385.717 31.2 383.797 30.7467 382.144 29.84C380.492 28.9067 379.2 27.64 378.268 26.04C377.336 24.4133 376.871 22.56 376.873 20.48C376.874 18.4 377.316 16.56 378.197 14.96C379.106 13.36 380.333 12.1067 381.881 11.2C383.455 10.2667 385.215 9.79999 387.162 9.79999C389.135 9.79999 390.882 10.2533 392.401 11.16C393.947 12.04 395.159 13.2933 396.037 14.92C396.916 16.52 397.354 18.3733 397.353 20.48C397.353 20.6133 397.339 20.76 397.312 20.92C397.312 21.0533 397.312 21.2 397.312 21.36H379.032L379.034 19.24H395.794L394.673 20.08C394.674 18.56 394.342 17.2133 393.677 16.04C393.038 14.84 392.158 13.9067 391.039 13.24C389.92 12.5733 388.626 12.24 387.16 12.24C385.72 12.24 384.426 12.5733 383.279 13.24C382.132 13.9067 381.238 14.84 380.597 16.04C379.955 17.24 379.634 18.6133 379.633 20.16L379.633 20.6C379.631 22.2 379.977 23.6133 380.669 24.84C381.388 26.04 382.374 26.9867 383.626 27.68C384.906 28.3467 386.359 28.68 387.985 28.68C389.265 28.68 390.452 28.4533 391.546 28C392.666 27.5467 393.627 26.8533 394.428 25.92L396.026 27.76C395.092 28.88 393.918 29.7333 392.504 30.32C391.117 30.9067 389.583 31.2 387.903 31.2ZM403.404 31.2C402.817 31.2 402.311 30.9867 401.884 30.56C401.485 30.1333 401.285 29.6133 401.286 29C401.286 28.36 401.487 27.84 401.887 27.44C402.314 27.04 402.821 26.84 403.408 26.84C403.994 26.84 404.488 27.04 404.887 27.44C405.314 27.84 405.526 28.36 405.526 29C405.525 29.6133 405.311 30.1333 404.884 30.56C404.484 30.9867 403.991 31.2 403.404 31.2Z" fill="white"/>
<path d="M282.044 327.24C279.937 327.24 277.991 326.893 276.205 326.2C274.419 325.48 272.873 324.48 271.567 323.2C270.262 321.92 269.236 320.413 268.491 318.68C267.773 316.947 267.414 315.053 267.416 313C267.418 310.947 267.78 309.053 268.501 307.32C269.249 305.587 270.277 304.08 271.585 302.8C272.92 301.52 274.48 300.533 276.268 299.84C278.055 299.12 280.002 298.76 282.109 298.76C284.135 298.76 286.042 299.107 287.828 299.8C289.614 300.467 291.12 301.48 292.345 302.84L290.463 304.72C289.318 303.547 288.052 302.707 286.666 302.2C285.279 301.667 283.786 301.4 282.186 301.4C280.506 301.4 278.946 301.693 277.506 302.28C276.065 302.84 274.811 303.653 273.743 304.72C272.676 305.76 271.835 306.987 271.22 308.4C270.632 309.787 270.338 311.32 270.336 313C270.335 314.68 270.627 316.227 271.212 317.64C271.824 319.027 272.663 320.253 273.729 321.32C274.795 322.36 276.047 323.173 277.487 323.76C278.926 324.32 280.486 324.6 282.166 324.6C283.766 324.6 285.26 324.333 286.647 323.8C288.034 323.267 289.301 322.413 290.449 321.24L292.327 323.12C291.1 324.48 289.592 325.507 287.805 326.2C286.017 326.893 284.097 327.24 282.044 327.24ZM305.656 327.2C303.63 327.2 301.803 326.747 300.178 325.84C298.578 324.907 297.313 323.64 296.381 322.04C295.449 320.413 294.984 318.56 294.986 316.48C294.988 314.373 295.456 312.52 296.391 310.92C297.325 309.32 298.593 308.067 300.194 307.16C301.795 306.253 303.622 305.8 305.675 305.8C307.755 305.8 309.595 306.253 311.194 307.16C312.82 308.067 314.085 309.32 314.991 310.92C315.922 312.52 316.388 314.373 316.386 316.48C316.384 318.56 315.916 320.413 314.981 322.04C314.073 323.64 312.805 324.907 311.178 325.84C309.55 326.747 307.71 327.2 305.656 327.2ZM305.659 324.68C307.179 324.68 308.525 324.347 309.699 323.68C310.873 322.987 311.794 322.027 312.462 320.8C313.156 319.547 313.504 318.107 313.506 316.48C313.507 314.827 313.162 313.387 312.469 312.16C311.804 310.933 310.885 309.987 309.712 309.32C308.539 308.627 307.206 308.28 305.713 308.28C304.219 308.28 302.886 308.627 301.712 309.32C300.538 309.987 299.604 310.933 298.909 312.16C298.215 313.387 297.867 314.827 297.866 316.48C297.864 318.107 298.21 319.547 298.902 320.8C299.594 322.027 300.527 322.987 301.699 323.68C302.872 324.347 304.192 324.68 305.659 324.68ZM332.913 305.8C334.62 305.8 336.113 306.133 337.392 306.8C338.698 307.44 339.711 308.427 340.43 309.76C341.175 311.093 341.547 312.773 341.545 314.8L341.535 327H338.695L338.705 315.08C338.707 312.867 338.148 311.2 337.029 310.08C335.937 308.933 334.391 308.36 332.391 308.36C330.898 308.36 329.591 308.667 328.47 309.28C327.376 309.867 326.522 310.733 325.908 311.88C325.32 313 325.026 314.36 325.024 315.96L325.015 327H322.175L322.193 306H324.913L324.908 311.76L324.469 310.68C325.137 309.16 326.205 307.973 327.672 307.12C329.139 306.24 330.886 305.8 332.913 305.8ZM354.846 327.2C353.112 327.2 351.473 326.96 349.926 326.48C348.38 325.973 347.167 325.347 346.288 324.6L347.57 322.36C348.423 323 349.516 323.56 350.848 324.04C352.181 324.493 353.581 324.72 355.048 324.72C357.048 324.72 358.488 324.413 359.369 323.8C360.249 323.16 360.69 322.32 360.691 321.28C360.692 320.507 360.439 319.907 359.932 319.48C359.453 319.027 358.813 318.693 358.013 318.48C357.214 318.24 356.32 318.04 355.334 317.88C354.347 317.72 353.361 317.533 352.374 317.32C351.415 317.107 350.535 316.8 349.735 316.4C348.935 315.973 348.283 315.4 347.777 314.68C347.297 313.96 347.058 313 347.059 311.8C347.06 310.653 347.381 309.627 348.022 308.72C348.663 307.813 349.597 307.107 350.824 306.6C352.077 306.067 353.598 305.8 355.384 305.8C356.744 305.8 358.104 305.987 359.464 306.36C360.824 306.707 361.943 307.173 362.823 307.76L361.581 310.04C360.648 309.4 359.648 308.947 358.582 308.68C357.515 308.387 356.449 308.24 355.382 308.24C353.489 308.24 352.089 308.573 351.181 309.24C350.301 309.88 349.86 310.707 349.859 311.72C349.859 312.52 350.098 313.147 350.578 313.6C351.084 314.053 351.737 314.413 352.537 314.68C353.363 314.92 354.256 315.12 355.216 315.28C356.203 315.44 357.176 315.64 358.136 315.88C359.122 316.093 360.015 316.4 360.815 316.8C361.641 317.173 362.294 317.72 362.773 318.44C363.279 319.133 363.532 320.053 363.531 321.2C363.53 322.427 363.182 323.493 362.488 324.4C361.821 325.28 360.833 325.973 359.526 326.48C358.246 326.96 356.686 327.2 354.846 327.2ZM377.417 327.2C375.63 327.2 374.071 326.867 372.738 326.2C371.405 325.533 370.366 324.533 369.62 323.2C368.902 321.867 368.543 320.2 368.545 318.2L368.555 306H371.395L371.385 317.88C371.383 320.12 371.928 321.813 373.021 322.96C374.14 324.08 375.699 324.64 377.699 324.64C379.166 324.64 380.433 324.347 381.5 323.76C382.594 323.147 383.421 322.267 383.982 321.12C384.57 319.973 384.864 318.6 384.866 317L384.875 306H387.715L387.697 327H384.977L384.982 321.24L385.421 322.28C384.753 323.827 383.712 325.04 382.298 325.92C380.911 326.773 379.284 327.2 377.417 327.2ZM395.612 327L395.638 297.32H398.478L398.452 327H395.612ZM413.111 327.2C411.138 327.2 409.618 326.667 408.553 325.6C407.487 324.533 406.955 323.027 406.957 321.08L406.974 301.36H409.814L409.797 320.92C409.796 322.147 410.102 323.093 410.714 323.76C411.354 324.427 412.26 324.76 413.433 324.76C414.687 324.76 415.727 324.4 416.554 323.68L417.553 325.72C416.992 326.227 416.312 326.6 415.512 326.84C414.738 327.08 413.938 327.2 413.111 327.2ZM403.208 308.36L403.21 306H416.21L416.208 308.36H403.208ZM423.392 327.2C422.805 327.2 422.299 326.987 421.872 326.56C421.473 326.133 421.273 325.613 421.274 325C421.274 324.36 421.475 323.84 421.875 323.44C422.302 323.04 422.809 322.84 423.396 322.84C423.982 322.84 424.476 323.04 424.875 323.44C425.302 323.84 425.514 324.36 425.514 325C425.513 325.613 425.3 326.133 424.872 326.56C424.472 326.987 423.979 327.2 423.392 327.2Z" fill="white"/>
<path d="M0.884048 227L0.908482 199H12.9885C16.1085 199 18.5213 199.627 20.2268 200.88C21.9591 202.133 22.8242 203.907 22.8222 206.2C22.8209 207.72 22.4598 209 21.7388 210.04C21.0446 211.08 20.0839 211.867 18.8568 212.4C17.6563 212.933 16.3361 213.2 14.8961 213.2L15.5769 212.24C17.3636 212.24 18.8967 212.52 20.1762 213.08C21.4824 213.613 22.495 214.427 23.2141 215.52C23.9331 216.587 24.292 217.92 24.2906 219.52C24.2885 221.893 23.4069 223.733 21.6458 225.04C19.9113 226.347 17.284 227 13.764 227H0.884048ZM3.84618 224.56H13.7262C16.1795 224.56 18.0599 224.147 19.3673 223.32C20.6747 222.467 21.3292 221.12 21.3308 219.28C21.3324 217.467 20.6802 216.147 19.3742 215.32C18.0683 214.467 16.1887 214.04 13.7354 214.04H3.53536L3.53749 211.6H12.7775C15.0175 211.6 16.7512 211.173 17.9786 210.32C19.2327 209.467 19.8605 208.2 19.8619 206.52C19.8634 204.813 19.2378 203.547 17.9852 202.72C16.7593 201.867 15.0264 201.44 12.7864 201.44H3.86635L3.84618 224.56ZM30.4403 227L30.4586 206H33.1786L33.1736 211.72L32.8945 210.72C33.4826 209.12 34.4703 207.907 35.8577 207.08C37.2451 206.227 38.9655 205.8 41.0188 205.8L41.0164 208.56C40.9097 208.56 40.8031 208.56 40.6964 208.56C40.5897 208.533 40.4831 208.52 40.3764 208.52C38.1631 208.52 36.4292 209.2 35.1746 210.56C33.9201 211.893 33.2918 213.8 33.2897 216.28L33.2803 227H30.4403ZM46.1825 227L46.2008 206H49.0408L49.0225 227H46.1825ZM47.6449 201.36C47.0582 201.36 46.565 201.16 46.1654 200.76C45.7657 200.36 45.5661 199.88 45.5666 199.32C45.5671 198.76 45.7675 198.293 46.1679 197.92C46.5682 197.52 47.0617 197.32 47.6484 197.32C48.235 197.32 48.7282 197.507 49.1279 197.88C49.5276 198.253 49.7272 198.72 49.7267 199.28C49.7262 199.867 49.5257 200.36 49.1254 200.76C48.7517 201.16 48.2582 201.36 47.6449 201.36ZM65.2845 227.2C63.2845 227.2 61.4849 226.747 59.8857 225.84C58.3131 224.933 57.0742 223.68 56.169 222.08C55.2637 220.453 54.812 218.587 54.8138 216.48C54.8157 214.347 55.2707 212.48 56.1787 210.88C57.0868 209.28 58.3279 208.04 59.902 207.16C61.5028 206.253 63.3032 205.8 65.3032 205.8C67.1432 205.8 68.7828 206.213 70.2221 207.04C71.688 207.867 72.847 209.08 73.6989 210.68C74.5775 212.253 75.0158 214.187 75.0138 216.48C75.0119 218.747 74.5835 220.68 73.7288 222.28C72.8741 223.88 71.713 225.107 70.2456 225.96C68.8049 226.787 67.1512 227.2 65.2845 227.2ZM65.4867 224.68C66.98 224.68 68.3137 224.347 69.4876 223.68C70.6882 222.987 71.6223 222.027 72.2901 220.8C72.9845 219.547 73.3324 218.107 73.3338 216.48C73.3353 214.827 72.9899 213.387 72.2976 212.16C71.632 210.933 70.6995 209.987 69.5001 209.32C68.3274 208.627 66.9943 208.28 65.501 208.28C64.0343 208.28 62.714 208.627 61.5401 209.32C60.3662 209.987 59.432 210.933 58.7376 212.16C58.0432 213.387 57.6953 214.827 57.6938 216.48C57.6924 218.107 58.0378 219.547 58.7301 220.8C59.4223 222.027 60.3548 222.987 61.5276 223.68C62.7003 224.347 64.02 224.68 65.4867 224.68ZM73.4047 227L73.4102 220.68L73.6939 216.44L73.2976 212.2L73.3106 197.32H76.1506L76.1247 227H73.4047ZM92.9871 234.96C91.0671 234.96 89.2273 234.68 87.4678 234.12C85.7083 233.56 84.2823 232.76 83.1899 231.72L84.6318 229.56C85.6177 230.44 86.8304 231.133 88.27 231.64C89.7362 232.173 91.2826 232.44 92.9093 232.44C95.576 232.44 97.5365 231.813 98.7909 230.56C100.045 229.333 100.674 227.413 100.676 224.8L100.681 219.56L101.084 215.96L100.807 212.36L100.812 206H103.532L103.516 224.44C103.513 228.067 102.617 230.72 100.829 232.4C99.0678 234.107 96.4538 234.96 92.9871 234.96ZM92.4747 226.2C90.4747 226.2 88.6751 225.773 87.0759 224.92C85.4766 224.04 84.211 222.827 83.279 221.28C82.3737 219.733 81.9219 217.96 81.9237 215.96C81.9254 213.96 82.3803 212.2 83.2883 210.68C84.223 209.133 85.4907 207.933 87.0914 207.08C88.6922 206.227 90.4925 205.8 92.4925 205.8C94.3592 205.8 96.0389 206.187 97.5315 206.96C99.0242 207.733 100.21 208.88 101.089 210.4C101.967 211.92 102.406 213.773 102.404 215.96C102.402 218.147 101.96 220 101.079 221.52C100.197 223.04 99.0098 224.2 97.5158 225C96.0218 225.8 94.3414 226.2 92.4747 226.2ZM92.7569 223.68C94.3036 223.68 95.6772 223.36 96.8778 222.72C98.0784 222.053 99.0258 221.147 99.7202 220C100.415 218.827 100.762 217.48 100.764 215.96C100.765 214.44 100.42 213.107 99.7272 211.96C99.0348 210.813 98.0889 209.92 96.8895 209.28C95.6901 208.613 94.317 208.28 92.7704 208.28C91.2504 208.28 89.8768 208.613 88.6495 209.28C87.4489 209.92 86.5015 210.813 85.8072 211.96C85.1395 213.107 84.805 214.44 84.8037 215.96C84.8024 217.48 85.1345 218.827 85.8002 220C86.4925 221.147 87.4384 222.053 88.6378 222.72C89.8639 223.36 91.2369 223.68 92.7569 223.68ZM120.337 227.2C118.15 227.2 116.23 226.747 114.578 225.84C112.925 224.907 111.633 223.64 110.701 222.04C109.769 220.413 109.304 218.56 109.306 216.48C109.308 214.4 109.749 212.56 110.631 210.96C111.539 209.36 112.767 208.107 114.314 207.2C115.888 206.267 117.649 205.8 119.595 205.8C121.569 205.8 123.315 206.253 124.834 207.16C126.38 208.04 127.592 209.293 128.471 210.92C129.349 212.52 129.788 214.373 129.786 216.48C129.786 216.613 129.772 216.76 129.746 216.92C129.746 217.053 129.745 217.2 129.745 217.36H111.465L111.467 215.24H128.227L127.106 216.08C127.108 214.56 126.776 213.213 126.11 212.04C125.471 210.84 124.592 209.907 123.472 209.24C122.353 208.573 121.06 208.24 119.593 208.24C118.153 208.24 116.86 208.573 115.712 209.24C114.565 209.907 113.671 210.84 113.03 212.04C112.389 213.24 112.068 214.613 112.066 216.16L112.066 216.6C112.065 218.2 112.41 219.613 113.102 220.84C113.821 222.04 114.807 222.987 116.06 223.68C117.339 224.347 118.792 224.68 120.419 224.68C121.699 224.68 122.886 224.453 123.979 224C125.1 223.547 126.06 222.853 126.861 221.92L128.46 223.76C127.525 224.88 126.351 225.733 124.937 226.32C123.55 226.907 122.017 227.2 120.337 227.2ZM135.837 227.2C135.251 227.2 134.744 226.987 134.318 226.56C133.918 226.133 133.719 225.613 133.719 225C133.72 224.36 133.92 223.84 134.321 223.44C134.748 223.04 135.254 222.84 135.841 222.84C136.428 222.84 136.921 223.04 137.321 223.44C137.747 223.84 137.96 224.36 137.959 225C137.959 225.613 137.745 226.133 137.318 226.56C136.917 226.987 136.424 227.2 135.837 227.2Z" fill="white"/>
<line x1="244.816" y1="306.008" x2="244.816" y2="51.9999" stroke="white"/>
<path d="M245.333 40C245.365 40.0041 245.331 40.0164 245.316 40.0164" stroke="white" stroke-width="4" stroke-linecap="round"/>
<path d="M244.316 314C244.378 314.008 244.358 314.129 244.401 314.043" stroke="white" stroke-width="4" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_0_1" x1="351.816" y1="114.5" x2="221.816" y2="228" gradientUnits="userSpaceOnUse">
<stop offset="0.0726202" stop-color="#20318C"/>
<stop offset="0.6875" stop-color="#1A1336"/>
</linearGradient>
<linearGradient id="paint1_linear_0_1" x1="153.816" y1="304.5" x2="259.316" y2="204.5" gradientUnits="userSpaceOnUse">
<stop stop-color="#20318C"/>
<stop offset="0.6875" stop-color="#1A1336"/>
</linearGradient>
</defs>
</svg>

        </div>
      </div>
    </>
  )
}
export default Hero