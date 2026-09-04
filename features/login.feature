Feature: Login
    Como usuario de SauceDemo
    quiero iniciar sesión
    para poder acceder a la aplicación

      Scenario: Login exitoso
          Given el usuario está en la página de login
          When el usuario ingresa credenciales válidas
          Then el usuario debería acceder al inventario

       Scenario: Login inválido
          Given el usuario está en la página de login
          When el usuario ingresa credenciales inválidas
          Then debería mostrarse un mensaje de error    