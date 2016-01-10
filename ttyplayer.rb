require "base64"


#To use it in ruby
"<tty-player autoplay loop src=\"data:application/x-ttyrec;base64, #{content}\"></tty-player>"

content = File.read('ttyrecord')
puts content = Base64.encode64 content
