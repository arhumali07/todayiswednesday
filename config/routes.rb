Rails.application.routes.draw do
  root :to => 'home#index'

  mount ShopifyApp::Engine, at: '/'
  resources :settings
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
