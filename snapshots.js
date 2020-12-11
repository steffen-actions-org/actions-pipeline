const PercyScript = require('@percy/script');

PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://ec2co-ecsel-tboyn72mjb5t-2101294819.eu-central-1.elb.amazonaws.com/');
  await percySnapshot('homepage');
});
