using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

[Table("useruni")]
public class UserUni
{
    public int Id {get; set;}
    [Column("user_id")]
    public int UserId {get; set;}
    [Column("uni_name")]
    public string Universityname {get; set;} = string.Empty;
}