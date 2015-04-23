require 'sinatra'
require 'sinatra/activerecord'

class Player < ActiveRecord::Base

end

get '/' do
  @player = Player.new
  erb :'players/new'
end

get '/card' do
  erb :home
end

get '/claim' do
  erb :'players/bingo'
end

post '/players' do
  @player = Player.new(params[:player])
  if @player.save
    redirect '/card'
  else
    erb :'players/new'
  end
end

get '/bingotastic/players' do
  @players = Player.all
  erb :'players/index'
end

get '/bingotastic/players/:id' do
  @player = Player.find(params[:id])
  erb :'players/show'
end

get '/bingotastic/pickawinner' do
  @winner = Player.all.sample
  erb :'players/winner'
end

delete '/bingotastic/players/:id' do
  @player = Player.find(params[:id])
  @player.destroy
  redirect '/bingotastic/players'
end