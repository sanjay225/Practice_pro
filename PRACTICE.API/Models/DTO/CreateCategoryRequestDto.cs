namespace PRACTICE.API.Models.Domain.DTO;

public class CreateCategoryRequestDto
{
        public Guid Id {get; set;}
        public string? Name {get; set;}
        public string? UrlHandle {get; set;}

}
