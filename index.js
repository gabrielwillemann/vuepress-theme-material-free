module.exports = (themeConfig, ctx) => {
  themeConfig.locales = {
    ...defaultLocales(),
    ...themeConfig.locales,
  };
  let configPluginBlog = {
    ...defaultConfigPluginBlog(),
    ...themeConfig.configPluginBlog,
  };
  return {
    plugins: [['@vuepress/plugin-blog', configPluginBlog]],
  };
};

function defaultConfigPluginBlog() {
  return {
    directories: [
      {
        id: 'post',
        dirname: '_posts',
        path: '/',
        layout: 'Index',
        itemLayout: 'Post',
        itemPermalink: '/:slug',
      },
    ],
    frontmatters: [
      {
        id: 'tag',
        keys: ['tags'],
        path: '/tag/',
        layout: 'Tags',
        scopeLayout: 'Tag',
      },
    ],
  };
}

function defaultLocales() {
  return {
    'default': 'en',
    'pt-BR': {
      breadcrumb: { home: 'Página Inicial' },
      sideBar: { favoritePosts: 'Postagens Populares' },
      social: { follow: 'Acesse' },
      notFound: {
        title: 'Página Não Encontrada!',
        home: 'Ir para Página Inicial',
      },
      article: { author: 'Autor' },
    },
    'en': {
      breadcrumb: { home: 'Home' },
      sideBar: { favoritePosts: 'Favorite Posts' },
      social: { follow: 'Follow Me' },
      notFound: {
        title: 'Page Not Found',
        home: 'Go to home',
      },
      article: { author: 'Author' },
    },
  };
}
