require "base64"
content = File.read('ttyrecord')
content = Base64.decode64 content
p content
