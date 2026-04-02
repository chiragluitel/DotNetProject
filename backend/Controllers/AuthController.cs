using backend.Data;
using backend.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers;
[ApiController]
[Route("/api/[controller]")]
public class AuthController: ControllerBase
{
    private readonly PGDbContext _context;

    public AuthController(PGDbContext context)
    {
        _context = context;
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login([FromBody] LoginRequestDTO request)
    {
        var usernamegiven = request.Username;
        var passwordgiven = request.Password;

        var user = await _context.Usernames
        .FirstOrDefaultAsync(u => u.Username == request.Username && u.Password == request.Password);

        if (user == null)
        {
            return Unauthorized("Fail");
        }
        else
        {
            return Ok("Pass");
        }
    }

}