require 'capistrano/ext/multistage'

set :application, "DSG"
set :repository,  "git@github.com:3months/cmi-site.git"
set :branch, "master"

set :scm, :git
set :deploy_via, :copy
# set :git_shallow_clone, 1 #comment out if deploying via a branch other than master
set :copy_exclude, [".gitignore", "config", "vendor", "framework", "CMS", "assets", ".htaccess", "_ss_environment.php", ".rvmrc", "shared", "buildtools", "docsviewer", "testsession", "installer", "blog", "widgets", "comments", "postgresql"]
set :port, 22

# set :scm, :git # You can set :scm explicitly or Capistrano will make an intelligent guess based on known version control directory names
# Or: `accurev`, `bzr`, `cvs`, `darcs`, `git`, `mercurial`, `perforce`, `subversion` or `none`

role :web, "103.6.212.52"                          # Your HTTP server, Apache/etc
role :app, "103.6.212.52"                          # This may be the same as your `Web` server
#role :db,  "your primary db-server here", :primary => true # This is where Rails migrations will run
#role :db,  "your slave db-server here"

set :user, "threemonths"
set :use_sudo, false

set :stages, %w(staging production)
set :default_stage, 'staging'

set :deploy_to, "/home/#{user}/apps/#{application}_staging"
set :keep_releases, 20

after "deploy:update_code", "setup:dev_build", "deploy:cleanup"
before "setup:dev_build", "setup:link_configuration", "setup:composer_update", "setup:create_cache_dirs"
after "setup:dev_build", "setup:make_cache_writeable", "setup:make_directories_writable_for_compass"

set :new_cache_dir, "/tmp/silverstripe-cache#{release_path.gsub('/','-')}"

namespace :setup do
  task :composer_update do
    run "cd #{release_path} && composer install"
  end

  task :dev_build do
    run "cd #{release_path} && php #{release_path}/framework/cli-script.php dev/build"
  end

  task :link_configuration, :except => {:no_release => true} do
    run "ln -s #{shared_path}/_ss_environment.php #{release_path}/_ss_environment.php"
    run "ln -s #{shared_path}/_config.php #{release_path}/mysite/_config.php"
    run "ln -s #{shared_path}/_htaccess #{release_path}/.htaccess"
    run "ln -s #{shared_path}/assets #{release_path}/assets"
    run "ln -s #{shared_path}/sendgrid-php #{release_path}/sendgrid-php"
  end

  task :create_cache_dirs, :except =>{:no_release => true} do
    #silverstripe requires TWO cache dirs in tmp
    #first is simply /tmp/silverstripe-cache
    run "if [ ! -d /tmp/silverstripe-cache ]; then mkdir /tmp/silverstripe-cache; fi"
    run "chmod -R 777 /tmp/silverstripe-cache"
    #second is one based on the release path dir
    # eg silverstripe-cache-home-threemonths-apps-silverstripe.3months.com-releases/20132010101
    run "if [ ! -d #{new_cache_dir} ]; then mkdir #{new_cache_dir}; fi"
    run "chmod -R 777 #{new_cache_dir}"
  end

  task :make_cache_writeable, :except => {:no_release => true} do
    run "chmod -R 777 /tmp/silverstripe-cache"
    run "chmod -R 777 #{new_cache_dir}"
  end

  task :make_directories_writable_for_compass, :except => {:no_release => true} do
    run "chmod -R 777 #{release_path}/cms"
    run "chmod -R 777 #{release_path}/framework"
    run "chmod -R 777 #{release_path}/themes/dsg/css"
  end
end

namespace :deploy do
  task :restart do
  end
  task :finalize_update do
  end
end
