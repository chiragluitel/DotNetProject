using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data;

public class PGDbContext : DbContext
{
    public PGDbContext(DbContextOptions<PGDbContext> options) : base (options) {}

    public DbSet<User> Usernames {get; set;}
    public DbSet<UserUni> UserUni {get; set;}
}