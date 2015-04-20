require 'sinatra'
require 'sinatra/activerecord'

class Player < ActiveRecord::Base

end

get '/' do
  @player = Player.new
  erb :'players/new'
end

post '/players' do
  @player = Player.new(params[:player])
  if @player.save
    erb :home
  else
    erb :'players/new'
  end
end

get '/admin/players' do
  @players = Player.all
  erb :'players/index'
end

get '/admin/players/:id' do
  @player = Player.find(params[:id])
  erb :'players/show'
end