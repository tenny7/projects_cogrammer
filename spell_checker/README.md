# Spell Checker
In **line 3** of the spell_checker file, I replaced the list of incorrect words _@words_ with the correct words. i.e cat, dog, rabbit, hamster, budgie and parrot

I replaced _line 5 to 9_ of this file with _line 12 to 18_
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
        
Afterwards, i interchanged contents of **line 11** and **line 13**
