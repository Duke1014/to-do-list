Rails.application.routes.draw do
  # resources :
  resources :users
  resources :todos
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  # USERS
  get "/me", to: "users#show"
  post "/signup", to: "users#create"

  # SESSIONS
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # TODOS
  get "/me/todos", to: "todos#user_todos"
  post "/todos", to: "todos#create"

  # GROUPS
  get "/me/groups", to: "groups#user_groups"
  get "/groups", to: "groups#index"


end
