#!/usr/bin/env ruby
result = `sass test/test.scss test.css`
raise result unless $?.to_i == 0
raise "When compiled the module should output some CSS" unless File.exists?('test.css')
puts "SASS compile was successful."
