def allLongestStrings(inputArray)
    
    len = 0
    longest = []
    
    inputArray.each do |el|
        if el.length > len 
            len = el.length 
        end  
    end 
    
    inputArray.each do |st|
        if st.length == len
            longest.push(st)
        end
    end 
    
    longest 
end
