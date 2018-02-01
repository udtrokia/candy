package main

// $ go get github.com/rs/cors
// $ go run main.go
import (
	"github.com/kataras/iris"
	"github.com/iris-contrib/middleware/cors"
)

func main() {
	// app init
	app := iris.New()
	crs := cors.New(cors.Options{
		AllowedOrigins:   []string{"*"}, 
		AllowCredentials: true,
	})

	//
	
	api := app.Party("/api")
	api.Use(crs)
	{
		api.Post( "/verify/start", start )
		api.Post( "/verify/check", check )
	}

	app.Run(iris.Addr("localhost:8080"))
}
