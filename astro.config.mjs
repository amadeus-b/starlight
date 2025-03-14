// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
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
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
