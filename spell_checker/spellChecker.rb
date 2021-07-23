class Spelling_Checker
    def initialize()
        @words = ['cat', 'dog', 'rabbit', 'hamster', 'budgie', 'parrot']
    end

    def spellChecker(string)
        array = string.split(" ")
       
        array.map { |n| 
            if @words.include? n
                n
            else 
                "*#{n}*"
            end
        }.join(" ")
    end

    
end
    
checker = Spelling_Checker.new
output = checker.spellChecker("dog doog dogg")
p output