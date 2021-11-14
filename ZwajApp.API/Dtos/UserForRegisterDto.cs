using System.ComponentModel.DataAnnotations;

namespace ZwajApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string UserName { get; set; }
        [StringLength(8,MinimumLength = 4,ErrorMessage = "يجب أن لا تزيد كلمة السر عن اربعة أحرف ولا تقل عن ثمانية")]

        public string Password { get; set; }
    }
}