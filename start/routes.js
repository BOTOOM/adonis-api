'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')


Route.group( () => {
  Route.resource('users','UserController')
  Route.post('users/login', 'UserController.login')
  // Route.resource('games','GameController').middleware('auth')
  Route.post('games','GameController.create').middleware('auth')
  Route.get('games','GameController.index').middleware('auth')

} ).prefix('api/v1')
