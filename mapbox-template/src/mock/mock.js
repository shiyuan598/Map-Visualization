import Mock from 'mockjs'

Mock.setup({
  timeout: 3000
})
Mock.mock('/api/login',
  {
    'message': 'success'
  }
)

Mock.mock('/api/user',
  {
    'array|1-10': [
      {
        'name': '@cname',
        'age|20-40': 25,
        'gender|1': ['male', 'female']
      }
    ]
  }
)
