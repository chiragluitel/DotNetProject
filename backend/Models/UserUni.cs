using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

public class UserUni
{
    public int Id {get; set;}
    [ForeignKey("UserId")]
    public User User {get; set;}
    public string Universityname {get; set;} = string.Empty;
}