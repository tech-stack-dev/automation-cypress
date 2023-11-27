import ApiSteps from '../../api/apiSteps';

const postsKey = '46f0966c8d4a82de657f5a4ab4';

describe('API tests', () => {
  it('Api test GET', () => {
    ApiSteps.executeGetRequest(`blog/ghost/api/v3/content/posts/?key=${postsKey}&limit=all`);
    ApiSteps.checkStatusCode(200);
    ApiSteps.checkPropertyValue('meta/pagination/limit', 'all');
    ApiSteps.checkPropertyValue('meta/pagination/page', '1');
  });

  it('Api test POST', async () => {
    const body = {
      name: 'morpheus',
      job: 'leader'
    };
    ApiSteps.executePostRequest('/api/users', body);
    ApiSteps.checkStatusCode(201);
    ApiSteps.checkPropertyValue('name', 'morpheus');
  });
});
