// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			favicon: '/favicon.svg',
			logo: {
				src: './src/assets/my-logo.svg',
				replacesTitle: true,
			},
			// Set German as the default/root language for this site.
 			defaultLocale: 'root',
      			locales: {
        		// German docs in `src/content/docs/`
        		root: {
          		  label: 'Deutsch',
			  lang: 'de',
        		},
		        // Thai docs in `src/content/docs/th/`
		        th: {
		          label: 'ไทย',
		          lang: 'th',
		        },
		        // English docs in `src/content/docs/en/`
		        en: {
		          label: 'Englisch',
		          lang: 'en',
		        },
		      },
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
    				{
      					label: 'Guides',
      					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				],
			customCss: [
       					 // Relative path to your custom CSS file
     					'./src/styles/custom.css',
    				  ],
		}),
	],
});
