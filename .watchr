watch("coffee/(.*).coffee") do |f|
  puts "Compiling #{f[0]}"
  `coffee -o js/ -c #{f[0]}`
end
