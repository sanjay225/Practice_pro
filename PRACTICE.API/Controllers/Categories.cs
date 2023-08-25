using Microsoft.AspNetCore.Mvc;
using PRACTICE.API.Models.Domain;
using PRACTICE.API.Models.Domain.DTO;

namespace PRACTICE.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriesController : ControllerBase
{
    public static List<Category> categories = new List<Category> {
                new Category {Id=Guid.NewGuid(), Name="Abc",UrlHandle="abc.abc"},
                new Category {Id=Guid.NewGuid(), Name="xyz",UrlHandle="xyz.xyz"},
                new Category {Id=Guid.NewGuid(), Name="def",UrlHandle="def.def"},
                
            };

    
    [HttpGet(Name = "GetCategory")]
    public IEnumerable<Category> Get()
    {
        return categories;
    }

    
    [HttpPost(Name ="Post Data")]
    public async Task<IActionResult> CreateCategory(CreateCategoryRequestDto request)
    {
        var Category= new Category
        {
            Id=Guid.NewGuid(),
            Name=request.Name,
            UrlHandle=request.UrlHandle
        };
       categories.Add(Category);
        

        return Ok(categories);

    }
    
}
