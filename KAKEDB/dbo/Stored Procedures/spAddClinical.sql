Create procedure spAddClinical
(        
    @Name NVARCHAR(MAX),      
    @WhatIs NVARCHAR(MAX),        
    @WhatCauses NVARCHAR(MAX),        
    @Symptons NVARCHAR(MAX)        
)        
as         
Begin         
    Insert into clinicalInfo (Name,WhatIs,WhatCauses,Symptons)         
    Values (@Name,@WhatIs,@WhatCauses, @Symptons)         
End