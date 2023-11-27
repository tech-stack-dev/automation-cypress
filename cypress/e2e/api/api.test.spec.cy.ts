import ApiSteps from '../../api/apiSteps';

const postsKey = '46f0966c8d4a82de657f5a4ab4';

describe('API tests', () => {
  it('Get request example', () => {
    ApiSteps.executeGetRequest(`blog/ghost/api/v3/content/posts/?key=${postsKey}&limit=all`);
    ApiSteps.checkStatusCode(200);
    ApiSteps.checkPropertyValue('meta/pagination/limit', 'all');
    ApiSteps.checkPropertyValue('meta/pagination/page', '1');
  });
});
