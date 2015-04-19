require 'sinatra'
require 'sinatra/activerecord'

get '/' do
  erb :home
end