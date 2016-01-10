require "base64"
content = File.read('ttyrecord')
puts Base64.encode64 content
#puts Base64.decode64 content
