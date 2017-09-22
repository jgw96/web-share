exports.config = {
  namespace: 'webshare',
  generateDistribution: true,
  generateWWW: true,
  bundles: [
    { components: ['web-share'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
