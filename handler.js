'use strict'

const hello = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event
    }),
  }

  callback(null, response)
}

const buildResponse = (statusCode, data) => ({
  statusCode,
  body: JSON.stringify(data)
})

const createUser = (event, context, callback) => {
  const body = JSON.parse(event.body)
  const a1 = body.a1
  const a2 = body.a2
  const sum = a1 + a2

  let response

  if (!a1 || !a2) {
    response = buildResponse(404, {
      message: 'You need to pass `a1 and `a2`',
      input: event
    })
  } else {
    response = buildResponse(201, {
      message: `User created with sum ${sum}`,
      input: event
    })
  }

  callback(null, response)
}

module.exports = {
  hello,
  createUser
}
