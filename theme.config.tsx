import { DocsThemeConfig } from 'nextra-theme-docs';
import { useDark } from '@/hooks/useDark';

const config: DocsThemeConfig = {
  docsRepositoryBase: 'https://github.com/NuboHQ/nubo-docs/tree/main',
  project: {
    link: 'https://github.com/NuboHQ/nubo',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Nubo',
    };
  },
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://nubo.app" target="_blank">
          Nubo
        </a>
      </span>
    ),
  },
  logo: () => {
    const isDark = useDark();

    return (
      <svg
        width="80"
        viewBox="0 0 462 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.648008 91V2.16999H17.784L62.766 57.988H59.112V2.16999H80.658V91H63.522L18.792 35.182H22.446V91H0.648008ZM167.932 92.386C154.66 92.386 144.706 89.11 138.07 82.558C131.434 76.006 128.116 66.22 128.116 53.2V2.16999H151.3V53.326C151.3 59.794 152.644 64.708 155.332 68.068C158.02 71.344 162.22 72.982 167.932 72.982C173.644 72.982 177.844 71.344 180.532 68.068C183.22 64.708 184.564 59.794 184.564 53.326V2.16999H207.496V53.2C207.496 66.22 204.22 76.006 197.668 82.558C191.116 89.11 181.204 92.386 167.932 92.386ZM254.617 91V2.16999H297.709C307.621 2.16999 315.223 4.228 320.515 8.344C325.891 12.46 328.579 18.046 328.579 25.102C328.579 30.31 327.025 34.762 323.917 38.458C320.893 42.154 316.735 44.674 311.443 46.018V44.002C317.743 45.094 322.573 47.53 325.933 51.31C329.377 55.006 331.099 59.836 331.099 65.8C331.099 73.612 328.243 79.786 322.531 84.322C316.819 88.774 309.007 91 299.095 91H254.617ZM276.919 73.99H296.071C300.439 73.99 303.673 73.192 305.773 71.596C307.957 70 309.049 67.522 309.049 64.162C309.049 60.718 307.957 58.24 305.773 56.728C303.673 55.216 300.439 54.46 296.071 54.46H276.919V73.99ZM276.919 37.45H293.425C297.877 37.45 301.111 36.694 303.127 35.182C305.227 33.67 306.277 31.36 306.277 28.252C306.277 25.144 305.227 22.876 303.127 21.448C301.111 19.936 297.877 19.18 293.425 19.18H276.919V37.45ZM372.07 46.522C372.07 37.282 373.876 29.26 377.488 22.456C381.1 15.568 386.266 10.234 392.986 6.454C399.706 2.674 407.644 0.783997 416.8 0.783997C426.04 0.783997 434.02 2.674 440.74 6.454C447.46 10.234 452.626 15.568 456.238 22.456C459.934 29.26 461.782 37.282 461.782 46.522C461.782 55.678 459.934 63.7 456.238 70.588C452.626 77.476 447.46 82.852 440.74 86.716C434.02 90.496 426.04 92.386 416.8 92.386C407.644 92.386 399.706 90.496 392.986 86.716C386.35 82.852 381.184 77.476 377.488 70.588C373.876 63.7 372.07 55.678 372.07 46.522ZM396.388 46.522C396.388 54.838 398.068 61.348 401.428 66.052C404.788 70.672 409.912 72.982 416.8 72.982C423.688 72.982 428.854 70.672 432.298 66.052C435.742 61.348 437.464 54.838 437.464 46.522C437.464 38.206 435.742 31.738 432.298 27.118C428.854 22.498 423.688 20.188 416.8 20.188C409.912 20.188 404.788 22.498 401.428 27.118C398.068 31.654 396.388 38.122 396.388 46.522Z"
          fill={isDark ? 'white' : 'black'}
        />
      </svg>
    );
  },
  // head: function Head() {
  //   const router = useRouter();
  //   const isDark = useDark();
  //   const { frontMatter, title } = useConfig();
  //   return (
  //     <>
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //       <link
  //         rel="icon"
  //         href={`/logo${isDark ? '-dark' : ''}.svg`}
  //         type="image/svg+xml"
  //       />
  //       <meta name="twitter:card" content="summary_large_image" />
  //       <meta property="og:type" content="website" />
  //       <meta name="og:title" content={title} />
  //       <meta name="og:description" content={frontMatter.description} />
  //       <meta
  //         property="og:url"
  //         content={`https://edge-runtime.vercel.app${router.asPath}`}
  //       />
  //       <meta
  //         property="og:image"
  //         content={`https://edge-runtime.vercel.app${
  //           frontMatter.ogImage ?? '/og-image.png'
  //         }`}
  //       />
  //       <meta property="og:site_name" content="Edge Runtime" />
  //     </>
  //   );
  // },
};

export default config;
