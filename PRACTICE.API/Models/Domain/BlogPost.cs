namespace PRACTICE.API.Models.Domain;

public class BlogPost
{
        public int Id {get; set;}
        public string? Title {get; set;}
        public string? ShortDescription {get; set;}
        public string? Content {get; set;}
        public string? FeaturedImageUrl {get; set;}
        public string? UrlHandle {get; set;}
        public DateTime publishedDate {get; set;}
        public string? Author {get; set;}
        public bool Isvisible {get; set;}  
}
