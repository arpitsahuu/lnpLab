"use client";
import { usePathname } from "next/navigation";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import Link from "next/link";
import { AlignJustify, CircleX  } from 'lucide-react';
import { navigation } from "../constants";
import { HamburgerMenu } from "./design/Header";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname(); // Get the current path
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    className={`fixed top-0 left-0 w-full z-50 ${
      openNavigation
        ? "bg-n-8"
        : isScrolled
        ? "bg-n-8/90 backdrop-blur-sm border-b border-n-6"
        : "bg-transparent"
    } transition-colors duration-300`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <Link href="#hero" passHref>
          {/* Remove the wrapping <a> tag */}
          <div className="block w-[12rem] xl:mr-8">
            {/* Add your image back if needed */}
            {/* <img src={brainwave} width={190} height={40} alt="Brainwave" /> */}
            <Link href={"/"}>
            <svg
              width="190"
              height="40"
              viewBox="0 0 1572 621"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1519_2)">
                <path
                  d="M832.568 396.623C823.556 396.623 815.973 395.047 809.814 391.892C803.655 388.738 799.076 384.081 796.072 377.923C793.068 371.617 791.566 363.806 791.566 354.494V303.354H773.769C772.267 303.354 770.989 302.828 769.939 301.777C768.888 300.726 768.359 299.449 768.359 297.947V284.881C768.359 283.379 768.888 282.102 769.939 281.051C770.989 279.999 772.267 279.474 773.769 279.474H791.566V242.076C791.566 240.574 792.017 239.298 792.917 238.246C793.967 237.195 795.319 236.669 796.971 236.669H815.22C816.722 236.669 818 237.195 819.05 238.246C820.1 239.298 820.626 240.574 820.626 242.076V279.474H848.79C850.292 279.474 851.566 279.999 852.616 281.051C853.67 282.102 854.195 283.379 854.195 284.881V297.947C854.195 299.449 853.67 300.726 852.616 301.777C851.566 302.828 850.292 303.354 848.79 303.354H820.626V352.241C820.626 358.399 821.68 363.205 823.78 366.66C826.035 370.115 829.865 371.841 835.271 371.841H850.817C852.319 371.841 853.593 372.366 854.647 373.416C855.697 374.47 856.223 375.745 856.223 377.247V391.217C856.223 392.719 855.697 393.993 854.647 395.047C853.593 396.097 852.319 396.623 850.817 396.623H832.568ZM881.614 396.623C880.112 396.623 878.837 396.097 877.783 395.047C876.733 393.993 876.208 392.719 876.208 391.217V284.881C876.208 283.379 876.733 282.102 877.783 281.051C878.837 279.999 880.112 279.474 881.614 279.474H900.09C901.588 279.474 902.866 279.999 903.917 281.051C904.971 282.102 905.496 283.379 905.496 284.881V294.117C909.399 289.311 914.357 285.331 920.365 282.177C926.52 278.873 934.108 277.221 943.116 277.221C952.279 277.221 960.241 279.324 966.998 283.529C973.755 287.584 978.937 293.366 982.543 300.876C986.297 308.386 988.173 317.397 988.173 327.91V391.217C988.173 392.719 987.648 393.993 986.598 395.047C985.548 396.097 984.269 396.623 982.767 396.623H962.944C961.442 396.623 960.164 396.097 959.113 395.047C958.063 393.993 957.538 392.719 957.538 391.217V329.262C957.538 320.551 955.36 313.717 951.005 308.761C946.796 303.805 940.641 301.326 932.529 301.326C924.721 301.326 918.485 303.805 913.832 308.761C909.175 313.717 906.847 320.551 906.847 329.262V391.217C906.847 392.719 906.322 393.993 905.268 395.047C904.218 396.097 902.943 396.623 901.441 396.623H881.614ZM1022.42 439.429C1020.92 439.429 1019.65 438.9 1018.59 437.849C1017.54 436.799 1017.02 435.521 1017.02 434.019V284.881C1017.02 283.379 1017.54 282.102 1018.59 281.051C1019.65 279.999 1020.92 279.474 1022.42 279.474H1040.22C1041.87 279.474 1043.15 279.999 1044.05 281.051C1045.1 282.102 1045.63 283.379 1045.63 284.881V293.892C1049.23 289.086 1053.97 285.106 1059.82 281.952C1065.68 278.798 1072.96 277.221 1081.67 277.221C1089.64 277.221 1096.54 278.497 1102.4 281.051C1108.26 283.604 1113.14 287.284 1117.04 292.09C1120.95 296.746 1123.95 302.303 1126.06 308.761C1128.16 315.219 1129.36 322.353 1129.66 330.163C1129.81 332.716 1129.89 335.345 1129.89 338.048C1129.89 340.752 1129.81 343.455 1129.66 346.158C1129.51 353.668 1128.38 360.652 1126.28 367.11C1124.18 373.416 1121.1 378.977 1117.04 383.78C1113.14 388.437 1108.26 392.117 1102.4 394.819C1096.54 397.522 1089.64 398.874 1081.67 398.874C1073.56 398.874 1066.65 397.449 1060.95 394.595C1055.24 391.591 1050.58 387.688 1046.98 382.88V434.019C1046.98 435.521 1046.45 436.799 1045.4 437.849C1044.5 438.9 1043.23 439.429 1041.57 439.429H1022.42ZM1073.34 374.772C1079.8 374.772 1084.83 373.416 1088.43 370.714C1092.04 367.86 1094.59 364.181 1096.09 359.676C1097.74 355.17 1098.72 350.214 1099.02 344.807C1099.32 340.301 1099.32 335.795 1099.02 331.29C1098.72 325.883 1097.74 320.927 1096.09 316.421C1094.59 311.915 1092.04 308.31 1088.43 305.607C1084.83 302.753 1079.8 301.326 1073.34 301.326C1067.18 301.326 1062.15 302.753 1058.24 305.607C1054.49 308.461 1051.71 312.14 1049.91 316.646C1048.26 321.002 1047.28 325.507 1046.98 330.163C1046.83 332.866 1046.76 335.72 1046.76 338.724C1046.76 341.728 1046.83 344.656 1046.98 347.51C1047.13 352.016 1048.18 356.372 1050.13 360.577C1052.08 364.632 1054.94 368.011 1058.7 370.714C1062.45 373.416 1067.33 374.772 1073.34 374.772Z"
                  fill="#2F7AEB"
                />
                <path
                  d="M1163.29 396.623C1161.79 396.623 1160.51 396.097 1159.46 395.047C1158.41 393.993 1157.88 392.719 1157.88 391.217V244.329C1157.88 242.827 1158.41 241.55 1159.46 240.499C1160.51 239.448 1161.79 238.922 1163.29 238.922H1184.24C1185.74 238.922 1187.02 239.448 1188.07 240.499C1189.12 241.55 1189.65 242.827 1189.65 244.329V369.814H1261.06C1262.71 369.814 1264.07 370.339 1265.12 371.389C1266.17 372.443 1266.69 373.795 1266.69 375.447V391.217C1266.69 392.719 1266.17 393.993 1265.12 395.047C1264.07 396.097 1262.71 396.623 1261.06 396.623H1163.29ZM1319.88 398.874C1312.07 398.874 1305.01 397.372 1298.7 394.371C1292.39 391.217 1287.36 387.085 1283.61 381.981C1280 376.722 1278.2 370.864 1278.2 364.407C1278.2 353.893 1282.41 345.558 1290.82 339.4C1299.38 333.092 1310.64 328.887 1324.61 326.784L1355.47 322.278V317.547C1355.47 311.239 1353.9 306.358 1350.74 302.903C1347.59 299.449 1342.18 297.722 1334.52 297.722C1329.12 297.722 1324.69 298.848 1321.23 301.101C1317.93 303.204 1315.45 306.058 1313.8 309.662C1312.6 311.615 1310.87 312.591 1308.61 312.591H1290.82C1289.17 312.591 1287.89 312.14 1286.99 311.239C1286.24 310.338 1285.86 309.137 1285.86 307.635C1286.01 305.231 1286.99 302.303 1288.79 298.848C1290.59 295.394 1293.45 292.09 1297.35 288.936C1301.25 285.632 1306.29 282.853 1312.44 280.6C1318.6 278.347 1326.04 277.221 1334.75 277.221C1344.21 277.221 1352.17 278.423 1358.63 280.825C1365.24 283.078 1370.5 286.157 1374.4 290.062C1378.3 293.967 1381.16 298.548 1382.96 303.805C1384.76 309.061 1385.66 314.618 1385.66 320.476V391.217C1385.66 392.719 1385.14 393.993 1384.09 395.047C1383.04 396.097 1381.76 396.623 1380.26 396.623H1362.01C1360.36 396.623 1359 396.097 1357.95 395.047C1357.05 393.993 1356.6 392.719 1356.6 391.217V382.429C1354.65 385.282 1352.02 387.985 1348.72 390.541C1345.41 392.943 1341.36 394.97 1336.55 396.623C1331.89 398.125 1326.34 398.874 1319.88 398.874ZM1327.54 377.475C1332.8 377.475 1337.53 376.347 1341.73 374.092C1346.09 371.841 1349.47 368.385 1351.87 363.731C1354.42 358.925 1355.7 352.917 1355.7 345.708V340.977L1333.17 344.582C1324.31 345.933 1317.7 348.111 1313.34 351.115C1308.99 354.118 1306.81 357.798 1306.81 362.154C1306.81 365.458 1307.79 368.312 1309.74 370.714C1311.84 372.968 1314.47 374.694 1317.63 375.895C1320.78 376.949 1324.09 377.475 1327.54 377.475ZM1479.45 398.874C1470.73 398.874 1463.45 397.372 1457.59 394.371C1451.89 391.367 1447.16 387.537 1443.4 382.88V391.217C1443.4 392.719 1442.88 393.993 1441.82 395.047C1440.92 396.097 1439.65 396.623 1437.99 396.623H1420.2C1418.7 396.623 1417.42 396.097 1416.37 395.047C1415.32 393.993 1414.79 392.719 1414.79 391.217V242.076C1414.79 240.574 1415.32 239.298 1416.37 238.246C1417.42 237.195 1418.7 236.669 1420.2 236.669H1439.35C1441 236.669 1442.28 237.195 1443.18 238.246C1444.23 239.298 1444.75 240.574 1444.75 242.076V292.09C1448.51 287.734 1453.17 284.205 1458.72 281.502C1464.43 278.648 1471.34 277.221 1479.45 277.221C1487.41 277.221 1494.32 278.573 1500.17 281.276C1506.03 283.98 1510.91 287.809 1514.82 292.766C1518.87 297.572 1521.95 303.204 1524.05 309.662C1526.16 316.12 1527.28 323.104 1527.43 330.614C1527.58 333.317 1527.66 335.795 1527.66 338.048C1527.66 340.151 1527.58 342.554 1527.43 345.257C1527.13 353.067 1525.93 360.276 1523.83 366.885C1521.73 373.343 1518.72 378.977 1514.82 383.78C1510.91 388.587 1506.03 392.341 1500.17 395.047C1494.32 397.599 1487.41 398.874 1479.45 398.874ZM1471.11 374.772C1477.57 374.772 1482.6 373.416 1486.21 370.714C1489.81 367.86 1492.37 364.181 1493.87 359.676C1495.52 355.17 1496.49 350.214 1496.79 344.807C1497.1 340.301 1497.1 335.795 1496.79 331.29C1496.49 325.883 1495.52 320.927 1493.87 316.421C1492.37 311.915 1489.81 308.31 1486.21 305.607C1482.6 302.753 1477.57 301.326 1471.11 301.326C1465.1 301.326 1460.22 302.678 1456.47 305.382C1452.71 308.085 1449.86 311.539 1447.91 315.745C1445.96 319.8 1444.9 324.081 1444.75 328.586C1444.6 331.29 1444.53 334.218 1444.53 337.372C1444.53 340.376 1444.6 343.23 1444.75 345.933C1445.05 350.589 1446.03 355.17 1447.68 359.676C1449.49 364.031 1452.26 367.636 1456.02 370.49C1459.92 373.343 1464.95 374.772 1471.11 374.772Z"
                  fill="#FFC95C"
                />
                <path
                  d="M1562.87 444.365H629.578C624.642 444.365 620.641 448.367 620.641 453.303V457.462C620.641 462.398 624.642 466.4 629.578 466.4H1562.87C1567.8 466.4 1571.8 462.398 1571.8 457.462V453.303C1571.8 448.367 1567.8 444.365 1562.87 444.365Z"
                  fill="#2F7AEB"
                />
                <path
                  d="M669.618 412.661L694.653 382.062C696.206 380.163 699.148 380.292 700.529 382.319L721.392 412.918C723.055 415.353 721.307 418.658 718.358 418.658H672.46C669.364 418.658 667.656 415.059 669.618 412.661Z"
                  fill="#2F7AEB"
                  stroke="#2F7AEB"
                  stroke-width="7.34488"
                />
                <path
                  d="M626.614 291.439C632.181 295.683 638.88 302.846 638.88 308.733C638.88 314.62 632.475 322.911 626.614 325.904C561.608 359.168 496.161 391.647 430.836 424.321C403.091 438.181 375.25 451.846 347.651 466.022C329.131 475.541 311.346 475.247 292.703 465.853C218.743 428.567 144.562 391.743 70.4797 354.777C56.0066 347.565 54.8292 348.301 54.78 364.589C54.78 378.496 55.0499 392.408 54.6573 406.29C54.2941 409.529 55.0146 412.793 56.7058 415.577C58.397 418.361 60.9636 420.502 64.0037 421.673C142.158 460.579 220.166 499.753 298.345 538.586C314.437 546.58 330.578 544.741 346.572 536.694C423.131 498.255 499.889 460.161 576.401 421.548C584.201 417.623 590.407 417.035 598.035 421.548C601.987 423.855 622.567 433.693 628.307 437.494C633.386 440.902 639.199 447.994 638.979 453.194C638.531 456.631 637.323 459.929 635.442 462.845C633.562 465.761 631.058 468.218 628.109 470.047C533.095 518.174 437.876 565.879 342.451 613.158C326.359 621.131 310.07 619.39 294.15 611.417C217.565 573.066 140.956 534.766 64.3224 496.514C48.2794 488.493 32.4327 480.179 16.0953 472.621C4.71306 467.322 -0.119435 459.4 0.0277487 446.642C0.493829 400.428 0.199444 354.212 0.199444 308.022C0.199444 262.615 0.493807 217.258 0.00319408 171.852C-0.14399 158.679 4.78666 150.927 16.6349 145.064C109.099 99.2738 201.416 53.1237 293.586 6.61344C301.728 2.27129 310.814 0 320.042 0C329.27 0 338.356 2.27129 346.498 6.61344C439.272 52.9764 532.096 99.2411 624.579 146.168C631.293 150.135 636.265 156.485 638.513 163.953C641.208 173.765 632.328 178.671 624.381 182.694C532.702 228.485 441.064 274.365 349.467 320.336C329.229 330.541 310.218 330.148 289.955 319.943C217.197 283.025 144.096 246.793 71.1422 210.316C56.1538 202.834 54.8046 203.619 54.78 220.3C54.78 233.792 55.0991 247.283 54.6331 260.775C54.3631 268.699 57.0859 273.605 64.4451 277.186C141.848 315.634 219.185 354.245 296.456 393.021C313.873 401.703 330.799 399.863 348.093 391.229C422.423 353.796 497.069 316.975 571.322 279.173C582.776 273.335 591.953 272.035 602.868 279.026"
                  fill="#2F7AEB"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M568.26 117.27C563.732 114.92 558.176 116.697 555.855 121.239C553.53 125.781 555.319 131.368 559.847 133.717L691.397 201.977L686.689 331.35C686.506 336.418 690.464 340.675 695.532 340.859C700.597 341.043 704.857 337.085 705.04 332.018L709.888 198.776C709.936 197.43 709.693 196.143 709.216 194.973C708.852 192.031 707.097 189.309 704.273 187.845L568.26 117.27Z"
                  fill="#2F7AEB"
                />
                <path
                  d="M695.925 378.262C707.08 378.262 716.123 369.218 716.123 358.063C716.123 346.908 707.08 337.865 695.925 337.865C684.77 337.865 675.727 346.908 675.727 358.063C675.727 369.218 684.77 378.262 695.925 378.262Z"
                  fill="white"
                  stroke="#2F7AEB"
                  stroke-width="7.34488"
                />
                <path
                  d="M673.347 494.577V487.545H722.438V494.577H701.855V553H693.929V494.577H673.347ZM728.55 553V503.909H735.837V511.324H736.348C737.243 508.895 738.862 506.924 741.206 505.411C743.55 503.898 746.192 503.142 749.132 503.142C749.686 503.142 750.379 503.153 751.21 503.174C752.041 503.195 752.669 503.227 753.095 503.27V510.94C752.84 510.876 752.254 510.781 751.338 510.653C750.443 510.504 749.494 510.429 748.493 510.429C746.107 510.429 743.976 510.93 742.101 511.931C740.247 512.911 738.777 514.275 737.691 516.022C736.625 517.748 736.093 519.719 736.093 521.935V553H728.55ZM776.482 554.151C773.371 554.151 770.548 553.565 768.013 552.393C765.477 551.2 763.464 549.484 761.972 547.247C760.481 544.989 759.735 542.261 759.735 539.065C759.735 536.253 760.289 533.973 761.397 532.226C762.505 530.457 763.986 529.072 765.839 528.071C767.693 527.07 769.739 526.324 771.976 525.834C774.234 525.322 776.504 524.918 778.783 524.619C781.766 524.236 784.185 523.948 786.038 523.756C787.913 523.543 789.277 523.192 790.129 522.702C791.003 522.212 791.44 521.359 791.44 520.145V519.889C791.44 516.736 790.577 514.286 788.851 512.538C787.146 510.791 784.558 509.918 781.085 509.918C777.484 509.918 774.661 510.706 772.615 512.283C770.57 513.859 769.131 515.543 768.3 517.332L761.141 514.776C762.42 511.793 764.124 509.47 766.255 507.808C768.407 506.125 770.751 504.953 773.286 504.293C775.843 503.611 778.357 503.27 780.829 503.27C782.406 503.27 784.217 503.462 786.262 503.845C788.329 504.207 790.321 504.964 792.239 506.114C794.178 507.265 795.786 509.001 797.065 511.324C798.343 513.646 798.982 516.757 798.982 520.656V553H791.44V546.352H791.056C790.545 547.418 789.692 548.558 788.499 549.772C787.306 550.987 785.719 552.02 783.737 552.872C781.756 553.724 779.337 554.151 776.482 554.151ZM777.633 547.375C780.616 547.375 783.13 546.789 785.175 545.617C787.242 544.445 788.798 542.933 789.842 541.079C790.907 539.225 791.44 537.276 791.44 535.23V528.327C791.12 528.71 790.417 529.062 789.33 529.381C788.265 529.68 787.029 529.946 785.623 530.18C784.238 530.393 782.885 530.585 781.564 530.756C780.264 530.905 779.21 531.033 778.4 531.139C776.44 531.395 774.607 531.81 772.903 532.386C771.219 532.94 769.856 533.781 768.812 534.911C767.789 536.018 767.278 537.531 767.278 539.449C767.278 542.07 768.247 544.051 770.186 545.393C772.146 546.714 774.629 547.375 777.633 547.375ZM812.749 553V503.909H820.292V553H812.749ZM816.584 495.727C815.114 495.727 813.846 495.227 812.781 494.225C811.737 493.224 811.215 492.02 811.215 490.614C811.215 489.207 811.737 488.004 812.781 487.002C813.846 486.001 815.114 485.5 816.584 485.5C818.055 485.5 819.312 486.001 820.356 487.002C821.421 488.004 821.954 489.207 821.954 490.614C821.954 492.02 821.421 493.224 820.356 494.225C819.312 495.227 818.055 495.727 816.584 495.727ZM841.649 523.469V553H834.107V503.909H841.393V511.58H842.033C843.183 509.087 844.93 507.084 847.274 505.571C849.618 504.037 852.643 503.27 856.351 503.27C859.675 503.27 862.583 503.952 865.076 505.315C867.569 506.658 869.508 508.703 870.893 511.452C872.278 514.179 872.97 517.631 872.97 521.807V553H865.428V522.318C865.428 518.462 864.426 515.457 862.423 513.305C860.42 511.132 857.672 510.045 854.178 510.045C851.77 510.045 849.618 510.567 847.722 511.612C845.847 512.656 844.366 514.179 843.279 516.182C842.192 518.185 841.649 520.614 841.649 523.469ZM886.753 553V503.909H894.296V553H886.753ZM890.588 495.727C889.118 495.727 887.85 495.227 886.785 494.225C885.741 493.224 885.219 492.02 885.219 490.614C885.219 489.207 885.741 488.004 886.785 487.002C887.85 486.001 889.118 485.5 890.588 485.5C892.058 485.5 893.316 486.001 894.36 487.002C895.425 488.004 895.958 489.207 895.958 490.614C895.958 492.02 895.425 493.224 894.36 494.225C893.316 495.227 892.058 495.727 890.588 495.727ZM915.653 523.469V553H908.11V503.909H915.397V511.58H916.037C917.187 509.087 918.934 507.084 921.278 505.571C923.622 504.037 926.647 503.27 930.355 503.27C933.679 503.27 936.587 503.952 939.08 505.315C941.573 506.658 943.512 508.703 944.897 511.452C946.282 514.179 946.974 517.631 946.974 521.807V553H939.431V522.318C939.431 518.462 938.43 515.457 936.427 513.305C934.424 511.132 931.676 510.045 928.181 510.045C925.774 510.045 923.622 510.567 921.725 511.612C919.85 512.656 918.37 514.179 917.283 516.182C916.196 518.185 915.653 520.614 915.653 523.469ZM980.572 572.432C976.929 572.432 973.797 571.963 971.176 571.026C968.555 570.109 966.371 568.895 964.624 567.382C962.898 565.891 961.524 564.293 960.501 562.588L966.51 558.369C967.192 559.264 968.055 560.287 969.099 561.438C970.143 562.609 971.57 563.621 973.381 564.474C975.214 565.347 977.611 565.784 980.572 565.784C984.535 565.784 987.806 564.825 990.384 562.908C992.962 560.99 994.251 557.986 994.251 553.895V543.923H993.612C993.058 544.818 992.27 545.926 991.247 547.247C990.246 548.547 988.797 549.708 986.9 550.731C985.025 551.732 982.49 552.233 979.294 552.233C975.331 552.233 971.773 551.295 968.619 549.42C965.487 547.545 963.005 544.818 961.172 541.239C959.361 537.659 958.456 533.312 958.456 528.199C958.456 523.17 959.34 518.792 961.108 515.063C962.877 511.313 965.338 508.415 968.491 506.37C971.645 504.303 975.288 503.27 979.422 503.27C982.618 503.27 985.153 503.803 987.028 504.868C988.925 505.912 990.373 507.105 991.375 508.447C992.398 509.768 993.186 510.855 993.74 511.707H994.507V503.909H1001.79V554.406C1001.79 558.625 1000.84 562.055 998.917 564.697C997.021 567.361 994.464 569.31 991.247 570.546C988.051 571.803 984.493 572.432 980.572 572.432ZM980.317 545.457C983.342 545.457 985.899 544.765 987.987 543.38C990.075 541.995 991.662 540.003 992.749 537.403C993.836 534.804 994.379 531.693 994.379 528.071C994.379 524.534 993.846 521.413 992.781 518.707C991.716 516.001 990.139 513.881 988.051 512.347C985.963 510.812 983.385 510.045 980.317 510.045C977.121 510.045 974.457 510.855 972.327 512.474C970.217 514.094 968.63 516.267 967.564 518.994C966.52 521.722 965.998 524.747 965.998 528.071C965.998 531.48 966.531 534.495 967.596 537.116C968.683 539.715 970.281 541.761 972.39 543.252C974.521 544.722 977.163 545.457 980.317 545.457ZM1059.45 553.895C1055.15 553.895 1051.44 553.107 1048.33 551.53C1045.22 549.953 1042.82 547.79 1041.14 545.042C1039.45 542.293 1038.61 539.151 1038.61 535.614C1038.61 532.886 1039.19 530.468 1040.34 528.359C1041.51 526.228 1043.12 524.257 1045.16 522.446C1047.23 520.614 1049.61 518.781 1052.29 516.949L1061.75 509.918C1063.6 508.703 1065.09 507.403 1066.19 506.018C1067.32 504.634 1067.89 502.822 1067.89 500.585C1067.89 498.923 1067.15 497.315 1065.68 495.759C1064.23 494.204 1062.33 493.426 1059.96 493.426C1058.3 493.426 1056.83 493.852 1055.55 494.705C1054.29 495.536 1053.3 496.601 1052.58 497.901C1051.88 499.179 1051.52 500.5 1051.52 501.864C1051.52 503.398 1051.94 504.953 1052.77 506.53C1053.62 508.085 1054.7 509.683 1056 511.324C1057.32 512.943 1058.68 514.605 1060.09 516.31L1090.13 553H1081.06L1056.25 523.085C1053.95 520.315 1051.86 517.801 1049.99 515.543C1048.11 513.284 1046.62 511.058 1045.52 508.863C1044.41 506.668 1043.85 504.293 1043.85 501.736C1043.85 498.795 1044.5 496.217 1045.8 494.001C1047.12 491.764 1048.97 490.028 1051.33 488.792C1053.72 487.535 1056.51 486.906 1059.71 486.906C1062.99 486.906 1065.81 487.545 1068.18 488.824C1070.54 490.081 1072.36 491.754 1073.64 493.842C1074.92 495.908 1075.56 498.156 1075.56 500.585C1075.56 503.717 1074.78 506.434 1073.22 508.735C1071.67 511.036 1069.55 513.178 1066.86 515.159L1053.83 524.875C1050.88 527.048 1048.89 529.158 1047.85 531.203C1046.8 533.249 1046.28 534.719 1046.28 535.614C1046.28 537.659 1046.82 539.566 1047.88 541.335C1048.95 543.103 1050.45 544.531 1052.39 545.617C1054.33 546.704 1056.59 547.247 1059.19 547.247C1061.67 547.247 1064.07 546.725 1066.42 545.681C1068.76 544.616 1070.88 543.082 1072.78 541.079C1074.7 539.076 1076.21 536.668 1077.32 533.856C1078.45 531.043 1079.01 527.879 1079.01 524.364H1086.3C1086.3 528.71 1085.8 532.258 1084.79 535.006C1083.79 537.755 1082.66 539.907 1081.41 541.462C1080.15 543.018 1079.14 544.179 1078.37 544.946C1078.11 545.266 1077.88 545.585 1077.67 545.905C1077.45 546.224 1077.22 546.544 1076.96 546.864C1074.85 549.229 1072.19 550.997 1068.97 552.169C1065.76 553.32 1062.58 553.895 1059.45 553.895ZM1124.82 553V487.545H1146.93C1152.07 487.545 1156.27 488.472 1159.53 490.326C1162.81 492.158 1165.24 494.641 1166.81 497.773C1168.39 500.905 1169.18 504.399 1169.18 508.256C1169.18 512.112 1168.39 515.617 1166.81 518.771C1165.26 521.924 1162.85 524.438 1159.59 526.313C1156.33 528.167 1152.15 529.094 1147.06 529.094H1131.21V522.062H1146.81C1150.32 522.062 1153.14 521.455 1155.27 520.241C1157.41 519.026 1158.95 517.386 1159.91 515.319C1160.89 513.231 1161.38 510.876 1161.38 508.256C1161.38 505.635 1160.89 503.291 1159.91 501.224C1158.95 499.158 1157.39 497.538 1155.24 496.366C1153.09 495.173 1150.24 494.577 1146.68 494.577H1132.74V553H1124.82ZM1188.47 487.545V553H1180.92V487.545H1188.47ZM1216.73 554.151C1213.62 554.151 1210.79 553.565 1208.26 552.393C1205.72 551.2 1203.71 549.484 1202.22 547.247C1200.72 544.989 1199.98 542.261 1199.98 539.065C1199.98 536.253 1200.53 533.973 1201.64 532.226C1202.75 530.457 1204.23 529.072 1206.08 528.071C1207.94 527.07 1209.98 526.324 1212.22 525.834C1214.48 525.322 1216.75 524.918 1219.03 524.619C1222.01 524.236 1224.43 523.948 1226.28 523.756C1228.16 523.543 1229.52 523.192 1230.37 522.702C1231.25 522.212 1231.68 521.359 1231.68 520.145V519.889C1231.68 516.736 1230.82 514.286 1229.09 512.538C1227.39 510.791 1224.8 509.918 1221.33 509.918C1217.73 509.918 1214.9 510.706 1212.86 512.283C1210.81 513.859 1209.38 515.543 1208.54 517.332L1201.39 514.776C1202.66 511.793 1204.37 509.47 1206.5 507.808C1208.65 506.125 1210.99 504.953 1213.53 504.293C1216.09 503.611 1218.6 503.27 1221.07 503.27C1222.65 503.27 1224.46 503.462 1226.51 503.845C1228.57 504.207 1230.57 504.964 1232.48 506.114C1234.42 507.265 1236.03 509.001 1237.31 511.324C1238.59 513.646 1239.23 516.757 1239.23 520.656V553H1231.68V546.352H1231.3C1230.79 547.418 1229.94 548.558 1228.74 549.772C1227.55 550.987 1225.96 552.02 1223.98 552.872C1222 553.724 1219.58 554.151 1216.73 554.151ZM1217.88 547.375C1220.86 547.375 1223.37 546.789 1225.42 545.617C1227.49 544.445 1229.04 542.933 1230.09 541.079C1231.15 539.225 1231.68 537.276 1231.68 535.23V528.327C1231.36 528.71 1230.66 529.062 1229.57 529.381C1228.51 529.68 1227.27 529.946 1225.87 530.18C1224.48 530.393 1223.13 530.585 1221.81 530.756C1220.51 530.905 1219.45 531.033 1218.64 531.139C1216.68 531.395 1214.85 531.81 1213.15 532.386C1211.46 532.94 1210.1 533.781 1209.06 534.911C1208.03 536.018 1207.52 537.531 1207.52 539.449C1207.52 542.07 1208.49 544.051 1210.43 545.393C1212.39 546.714 1214.87 547.375 1217.88 547.375ZM1272.94 554.023C1268.33 554.023 1264.37 552.936 1261.05 550.763C1257.72 548.589 1255.17 545.596 1253.38 541.782C1251.59 537.968 1250.69 533.611 1250.69 528.71C1250.69 523.724 1251.61 519.325 1253.44 515.511C1255.29 511.675 1257.87 508.682 1261.18 506.53C1264.5 504.357 1268.38 503.27 1272.81 503.27C1276.26 503.27 1279.37 503.909 1282.14 505.188C1284.91 506.466 1287.18 508.256 1288.95 510.557C1290.72 512.858 1291.81 515.543 1292.24 518.611H1284.7C1284.12 516.374 1282.84 514.392 1280.86 512.666C1278.9 510.919 1276.26 510.045 1272.94 510.045C1270 510.045 1267.42 510.812 1265.2 512.347C1263.01 513.859 1261.29 516.001 1260.06 518.771C1258.84 521.519 1258.23 524.747 1258.23 528.455C1258.23 532.247 1258.83 535.55 1260.02 538.362C1261.24 541.175 1262.94 543.359 1265.14 544.914C1267.35 546.469 1269.95 547.247 1272.94 547.247C1274.9 547.247 1276.68 546.906 1278.27 546.224C1279.87 545.543 1281.22 544.562 1282.33 543.284C1283.44 542.006 1284.23 540.472 1284.7 538.682H1292.24C1291.81 541.58 1290.76 544.19 1289.08 546.512C1287.41 548.813 1285.21 550.646 1282.46 552.009C1279.73 553.352 1276.56 554.023 1272.94 554.023ZM1323.85 554.023C1319.12 554.023 1315.04 552.979 1311.61 550.891C1308.2 548.781 1305.57 545.841 1303.71 542.07C1301.88 538.277 1300.97 533.866 1300.97 528.838C1300.97 523.81 1301.88 519.378 1303.71 515.543C1305.57 511.686 1308.15 508.682 1311.45 506.53C1314.77 504.357 1318.65 503.27 1323.08 503.27C1325.64 503.27 1328.16 503.696 1330.66 504.548C1333.15 505.401 1335.42 506.786 1337.46 508.703C1339.51 510.599 1341.14 513.114 1342.35 516.246C1343.57 519.378 1344.18 523.234 1344.18 527.815V531.011H1306.33V524.491H1336.51C1336.51 521.722 1335.95 519.25 1334.84 517.077C1333.76 514.903 1332.2 513.188 1330.18 511.931C1328.17 510.674 1325.81 510.045 1323.08 510.045C1320.08 510.045 1317.48 510.791 1315.28 512.283C1313.11 513.753 1311.44 515.67 1310.27 518.036C1309.09 520.401 1308.51 522.936 1308.51 525.642V529.989C1308.51 533.696 1309.15 536.839 1310.43 539.417C1311.73 541.974 1313.53 543.923 1315.83 545.266C1318.13 546.587 1320.8 547.247 1323.85 547.247C1325.83 547.247 1327.62 546.97 1329.22 546.416C1330.84 545.841 1332.23 544.989 1333.41 543.859C1334.58 542.709 1335.48 541.281 1336.12 539.577L1343.41 541.622C1342.64 544.094 1341.35 546.267 1339.54 548.142C1337.73 549.996 1335.49 551.445 1332.83 552.489C1330.17 553.511 1327.17 554.023 1323.85 554.023ZM1355.65 553V503.909H1362.94V511.58H1363.58C1364.6 508.959 1366.25 506.924 1368.53 505.475C1370.81 504.005 1373.55 503.27 1376.74 503.27C1379.98 503.27 1382.68 504.005 1384.83 505.475C1387 506.924 1388.7 508.959 1389.91 511.58H1390.42C1391.68 509.044 1393.56 507.031 1396.08 505.539C1398.59 504.026 1401.61 503.27 1405.12 503.27C1409.51 503.27 1413.1 504.644 1415.89 507.393C1418.69 510.12 1420.08 514.371 1420.08 520.145V553H1412.54V520.145C1412.54 516.523 1411.55 513.934 1409.57 512.379C1407.58 510.823 1405.25 510.045 1402.57 510.045C1399.12 510.045 1396.44 511.089 1394.55 513.178C1392.65 515.244 1391.7 517.865 1391.7 521.04V553H1384.03V519.378C1384.03 516.587 1383.12 514.339 1381.31 512.634C1379.5 510.908 1377.17 510.045 1374.31 510.045C1372.35 510.045 1370.52 510.567 1368.82 511.612C1367.13 512.656 1365.77 514.104 1364.73 515.958C1363.7 517.79 1363.19 519.911 1363.19 522.318V553H1355.65ZM1454.45 554.023C1449.72 554.023 1445.64 552.979 1442.21 550.891C1438.8 548.781 1436.17 545.841 1434.32 542.07C1432.49 538.277 1431.57 533.866 1431.57 528.838C1431.57 523.81 1432.49 519.378 1434.32 515.543C1436.17 511.686 1438.75 508.682 1442.05 506.53C1445.38 504.357 1449.26 503.27 1453.69 503.27C1456.24 503.27 1458.77 503.696 1461.26 504.548C1463.75 505.401 1466.02 506.786 1468.07 508.703C1470.12 510.599 1471.75 513.114 1472.96 516.246C1474.17 519.378 1474.78 523.234 1474.78 527.815V531.011H1436.94V524.491H1467.11C1467.11 521.722 1466.56 519.25 1465.45 517.077C1464.36 514.903 1462.81 513.188 1460.78 511.931C1458.78 510.674 1456.41 510.045 1453.69 510.045C1450.68 510.045 1448.08 510.791 1445.89 512.283C1443.72 513.753 1442.04 515.67 1440.87 518.036C1439.7 520.401 1439.11 522.936 1439.11 525.642V529.989C1439.11 533.696 1439.75 536.839 1441.03 539.417C1442.33 541.974 1444.13 543.923 1446.43 545.266C1448.73 546.587 1451.41 547.247 1454.45 547.247C1456.44 547.247 1458.23 546.97 1459.82 546.416C1461.44 545.841 1462.84 544.989 1464.01 543.859C1465.18 542.709 1466.09 541.281 1466.73 539.577L1474.01 541.622C1473.25 544.094 1471.96 546.267 1470.15 548.142C1468.34 549.996 1466.1 551.445 1463.44 552.489C1460.77 553.511 1457.78 554.023 1454.45 554.023ZM1493.8 523.469V553H1486.25V503.909H1493.54V511.58H1494.18C1495.33 509.087 1497.08 507.084 1499.42 505.571C1501.77 504.037 1504.79 503.27 1508.5 503.27C1511.82 503.27 1514.73 503.952 1517.22 505.315C1519.72 506.658 1521.66 508.703 1523.04 511.452C1524.43 514.179 1525.12 517.631 1525.12 521.807V553H1517.58V522.318C1517.58 518.462 1516.57 515.457 1514.57 513.305C1512.57 511.132 1509.82 510.045 1506.33 510.045C1503.92 510.045 1501.77 510.567 1499.87 511.612C1498 512.656 1496.51 514.179 1495.43 516.182C1494.34 518.185 1493.8 520.614 1493.8 523.469ZM1560.25 503.909V510.301H1534.81V503.909H1560.25ZM1542.23 492.148H1549.77V538.938C1549.77 541.068 1550.08 542.666 1550.69 543.732C1551.33 544.776 1552.14 545.479 1553.12 545.841C1554.13 546.182 1555.18 546.352 1556.29 546.352C1557.12 546.352 1557.8 546.31 1558.33 546.224C1558.87 546.118 1559.29 546.033 1559.61 545.969L1561.15 552.744C1560.63 552.936 1559.92 553.128 1559 553.32C1558.09 553.533 1556.93 553.639 1555.52 553.639C1553.39 553.639 1551.3 553.181 1549.26 552.265C1547.23 551.349 1545.55 549.953 1544.21 548.078C1542.89 546.203 1542.23 543.838 1542.23 540.983V492.148Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1519_2">
                  <rect width="1571.8" height="620.643" fill="white" />
                </clipPath>
              </defs>
            </svg>
            </Link>
          </div>
        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent lg:w-full `}
        >
          <div className="relative z-2 flex flex-col items-center justify-center sm:justify-between   m-auto lg:flex-row w-full ">
            <div></div>
            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center ">
              {navigation.map((item) => (
                <Link key={item.id} href={item.url} passHref>
                  {/* Remove the wrapping <a> tag */}
                  <div
                    onClick={handleClick}
                    className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                      item.onlyMobile ? "lg:hidden" : ""
                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                      item.url === pathname
                        ? "z-2 lg:text-n-1"
                        : "lg:text-n-1/50"
                    } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
                  >
                    {item.title}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <HamburgerMenu />
        </nav>

        <button
          className={` ml-auto lg:hidden button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-7 text-n-1  `}
          onClick={toggleNavigation}
        >
          {/* {ButtonSvg} */}
          {/* <span className={spanClasses}>{children}</span> */}
          {/* <MenuSvg openNavigation={openNavigation} /> */}
          {openNavigation ? <CircleX /> :  <AlignJustify/>}
        </button>

        {/* <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button> */}
      </div>
    </div>
  );
};

export default Header;
