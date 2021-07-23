# Spell Checker Option 4: Ruby

`Driver code`  
> output = checker.spellChecker("dog doog dogg") located in **line  22** of _spell_checker.rb_  

In **line 3** of the spell_checker file, I replaced the list of incorrect words _@words_ with the correct words. i.e cat, dog, rabbit, hamster, budgie and parrot

I replaced _line 9 to 13_ of _spell_checker.rb_ file with _line 16 to 22_
> array.each{ |n|
        if @words.include? n
        "*#{n}*"
        end
        }.join(" ")
        
 
> array.map { |n| 
            if @words.include? n
                n
            else 
                "*#{n}*"
            end
        }.join(" ")
    
The implementation uses a `array.map` as against `for loop`
