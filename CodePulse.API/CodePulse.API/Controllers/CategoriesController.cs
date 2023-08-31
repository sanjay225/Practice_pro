using CodePulse.API.Data;
using CodePulse.API.Models.Domain;
using CodePulse.API.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CodePulse.API.Controllers
{
    //https://localhost:xxxx/api/categories
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {

        public CategoriesController(ApplicationDbContext dbContext)
        {
            this.DbContext = dbContext;
        }

        public ApplicationDbContext DbContext { get; }

        [HttpPost]
        public async Task<IActionResult> CreateCategory(Category request)
        {
            await DbContext.Categories.AddAsync(request);
            await DbContext.SaveChangesAsync();

            return Ok(request);
        }

        [HttpGet]
        public async Task<ActionResult> GetAllCategories()
            {
            var cat = await DbContext.Categories.ToListAsync();

            return Ok(cat);
        }

        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<ActionResult> GetAllCategories(Guid id)
        {
            var cat = await DbContext.Categories.FirstOrDefaultAsync(x => x.Id == id);
            if (cat == null)
                return NotFound();

            return Ok(cat);
        }

        [HttpDelete]
        [Route("{id:Guid}")]
        public async Task<ActionResult> DeleteCategory(Guid id)
        {
            var cat = await DbContext.Categories.FindAsync(id);
            if (cat == null)
                return NotFound();

            DbContext.Categories.Remove(cat);
            await DbContext.SaveChangesAsync();

            return Ok(cat);

        }
        [HttpPut]
        [Route("{id:Guid}")]

        public async Task<IActionResult> UpdateCategory([FromRoute]Guid id, Category updateCatRequest)
            {
            var cat = await DbContext.Categories.FindAsync(id);
            if (cat == null)
                return NotFound();

            cat.Name = updateCatRequest.Name;
            cat.UrlHandle = updateCatRequest.UrlHandle;

            await DbContext.SaveChangesAsync();
               
            return Ok(updateCatRequest);
        }

    }
}
