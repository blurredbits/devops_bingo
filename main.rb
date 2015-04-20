require 'sinatra'
require 'sinatra/activerecord'

class Player < ActiveRecord::Base

end

get '/' do
  erb :home
end

get '/players/new' do
  @player = Player.new
  erb :new_player
end

post '/players' do
  @player = Player.new(params[:player])
  if @player.save
    erb :home
  else
    erb :new_player
  end
end

get '/admin/players' do
  @players = Player.all
end