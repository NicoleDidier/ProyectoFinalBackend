# API de cotizacion de dolar

* Loguearse con el endpoint `localhost:8080/login` para obtener el token

* En los endpoints donde se pida token agregar header `Authorization <TOKEN>`

* Los administradores pueden cotizar con todos los tipos de dolar, incluso los dolares financieros ('bolsa', 'contadoconliqui') y los usuarios comunes pueden cotizar unicamente con ('mayorista', 'solidario', 'oficial', 'blue')

* PORT = 8080
DATABASE_URL=mongodb+srv://numen:numen123@cluster0.tcvmdfz.mongodb.net/?retryWrites=true&w=majority
TOKEN_SECRET_KEY=NumenToken

* Endpoints:

* Crear usuario
```bash
curl --location 'localhost:8080/user' \
--header 'Content-Type: application/json' \
--data '{
    "username": "franco",
    "password": "fran1234"
}'
```

* Obtener Usuarios

```bash
curl --location 'localhost:8080/user' \
--header 'Authorization: TOKEN'
```

* Actualizar Usuario

```bash
curl --location --request PUT 'localhost:8080/user/Nicole' \
--header 'Authorization: TOKEN' \
--header 'Content-Type: application/json' \
--data '{
        "username": "Maria",
        "password": "nicole123"
}'
```

* Eliminar Usuario

```bash
curl --location --request DELETE 'localhost:8080/user/Francisco' \
--header 'Authorization: TOKEN' \
--header 'Content-Type: text/plain' \
--data '{
        "username": "Francisco",
        "password": "francisco123"
}'
```

* Crear login
```bash
curl --location 'localhost:8080/auth/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "franco",
    "password": "fran1234"
}'
```

* Crear cotizacion
 ```bash
    curl --location 'localhost:8080/cotizacion' \
    --header 'Authorization: TOKEN' \
    --header 'Content-Type: application/json' \
    --data '{
        "valorPesos": 900,
        "tipoDolar": "bolsa"
    }'
   ```

* Obtener Cotizaciones 

```bash
curl --location 'localhost:8080/cotizacion' \
--header 'Authorization: TOKEN'
```



