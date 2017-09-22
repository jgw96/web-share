exports.config = {
  namespace: 'webshare',
  generateDistribution: true,
  generateWWW: true,
  bundles: [
    { components: ['web-share'] }
  ],
  collections: [
    { name: 'ionicons' }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
