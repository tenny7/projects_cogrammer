class Spelling_Checker
    def initialize()
        @words = ['catt', 'ct', 'caaat','tcat']
    end

    def spellChecker(string)
        array = string.split(" ")
       
        array.map { |n| 
            if @words.include? n
                "*#{n}*"
            else 
                n
            end
        }.join(" ")
    end
end
    
checker = Spelling_Checker.new
output = checker.spellChecker("cat ct")
p output