using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models;

[Table("usersnames")]
public class User
{
    [Column("id")]
    public int Id {get; set;}
    [Column("username")]
    public string Username {get;set;} = string.Empty;
    [Column("password")]
    public string Password {get;set;} = string.Empty;
}

